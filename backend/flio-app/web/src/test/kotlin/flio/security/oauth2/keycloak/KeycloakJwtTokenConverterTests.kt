@file:Suppress("NonAsciiCharacters")

package flio.security.oauth2.keycloak

import flio.security.oauth2.keycloak.KeycloakJwtTokenConverter.KeycloakClaims
import flio.security.oauth2.keycloak.KeycloakJwtTokenConverter.KeycloakRolePrefix
import io.kotest.matchers.shouldBe
import org.junit.jupiter.api.Test
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.MethodSource
import org.springframework.security.oauth2.jwt.Jwt
import org.springframework.security.oauth2.jwt.JwtClaimNames

/**
 * Keycloak 의 JWT 를 Spring Security 의 Authentication 으로 정상 변환되는지 테스트한다.
 */
class KeycloakJwtTokenConverterTests {
    private val sut = KeycloakJwtTokenConverter()

    @Test
    fun `주어진 Jwt 로부터 권한을 파싱할 수 있다`() {
        val scopeValue = "groups email profile user_id"

        val realmAccessValue = mapOf(
            "roles" to arrayOf("offline_access", "uma_authorization")
        )

        val resourceAccessValue = mapOf(
            "account" to mapOf("roles" to arrayOf("manage-account")),
        )


        val jwt = Jwt.withTokenValue("mock")
            .header("alg", "none")
            .claim(KeycloakClaims.SCOPE, scopeValue)
            .claim(KeycloakClaims.REALM_ACCESS, realmAccessValue)
            .claim(KeycloakClaims.RESOURCE_ACCESS, resourceAccessValue)
            .build()

        val token = sut.convert(jwt)

        val authorityGroupByPrefix = token.authorities.groupBy {
            "${it.authority.substringBefore("_")}_"
        }

        authorityGroupByPrefix[KeycloakRolePrefix.SCOPE]?.size shouldBe 4
        authorityGroupByPrefix[KeycloakRolePrefix.REALM_ACCESS]?.size shouldBe 2
        authorityGroupByPrefix[KeycloakRolePrefix.RESOURCE_ACCESS]?.size shouldBe 1

    }

    @ParameterizedTest
    @MethodSource("subjectClaimPriorities")
    fun `주어진 Jwt 의 subject 클레임을 토큰 이름으로 취급한다`(subjectClaim: String) {
        val username = "플리오"
        val jwt = Jwt.withTokenValue("mock")
            .header("alg", "none")
            .claim(subjectClaim, username)
            .build()

        val token = sut.convert(jwt)
        token.name shouldBe username
    }

    @Test
    fun `주어진 Jwt 에서 subject 클레임을 찾을 수 없는 경우 토큰 이름은 null 로 설정한다`() {
        val jwt = Jwt.withTokenValue("mock")
            .header("alg", "none")
            .claim("foo", "bar")
            .build()

        val token = sut.convert(jwt)
        token.name shouldBe null
    }

    companion object {
        private const val SUBJECT_CLAIM_IN_GENERAL = JwtClaimNames.SUB
        private const val SUBJECT_CLAIM_FOR_KEYCLOAK = KeycloakClaims.PREFERRED_USERNAME

        @JvmStatic
        fun subjectClaimPriorities(): List<String> = listOf(
            SUBJECT_CLAIM_FOR_KEYCLOAK,
            SUBJECT_CLAIM_IN_GENERAL
        )
    }
}