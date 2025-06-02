package flio.security.oauth2.keycloak

import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.databind.ObjectMapper
import io.github.oshai.kotlinlogging.KotlinLogging
import org.springframework.core.convert.converter.Converter
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.oauth2.jwt.Jwt
import org.springframework.security.oauth2.jwt.JwtClaimNames
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken
import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter

private val log = KotlinLogging.logger { }

class KeycloakJwtTokenConverter : Converter<Jwt, JwtAuthenticationToken> {
    private val objectMapper = ObjectMapper().apply {
        configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
        configure(DeserializationFeature.READ_UNKNOWN_ENUM_VALUES_AS_NULL, true)
    }

    private val defaultConverter = JwtGrantedAuthoritiesConverter()

    override fun convert(jwt: Jwt): JwtAuthenticationToken {
        val authorities = listOf(
            extractFromScopes(jwt),
            extractFromRealmAccess(jwt),
            extractFromResourceAccess(jwt),
        ).flatten()

        return JwtAuthenticationToken(jwt, authorities, jwt.principal)
    }

    // scope 혹은 scp 클레임을 읽어 "SCOPE_" Prefix 를 붙인 권한 객체를 반환한다. (우선순위는 scope 가 더 높다.)
    private fun extractFromScopes(jwt: Jwt): Collection<GrantedAuthority> {
        return defaultConverter.convert(jwt) ?: emptyList()
    }

    private fun extractFromRealmAccess(jwt: Jwt): Collection<GrantedAuthority> {
        val claimValue = jwt.getClaimAsMap(KeycloakClaims.REALM_ACCESS)
            ?: return emptyList()

        val realmAccess = try {
            objectMapper.convertValue(claimValue, RealmAccess::class.java)
        } catch (e: IllegalArgumentException) {
            log.error(e) { "지원하지 않는 형식의 값: RealmAccess JWT 파싱 실패, 빈 권한 반환" }
            log.debug(e) { "RealmAccess 로 파싱 시도한 원본 데이터: $claimValue" }
            return emptyList()
        }

        return realmAccess.roles.map {
            SimpleGrantedAuthority("${KeycloakRolePrefix.REALM_ACCESS}$it")
        }
    }

    private fun extractFromResourceAccess(jwt: Jwt): Collection<GrantedAuthority> {
        val claimValue = jwt.getClaimAsMap(KeycloakClaims.RESOURCE_ACCESS)
            ?: return emptyList()

        val resourceAccess = try {
            objectMapper.convertValue(claimValue, ResourceAccess::class.java)
        } catch (e: IllegalArgumentException) {
            log.error(e) { "지원하지 않는 형식의 값: ResourceAccount JWT 파싱 실패, 빈 권한 반환" }
            log.debug(e) { "ResourceAccount 로 파싱 시도한 원본 데이터: $claimValue" }
            return emptyList()
        }

        return resourceAccess.account.roles.map {
            SimpleGrantedAuthority("${KeycloakRolePrefix.RESOURCE_ACCESS}$it")
        }
    }

    private val Jwt.principal: String?
        get() = this.getClaim(KeycloakClaims.PREFERRED_USERNAME)
            ?: this.getClaim(JwtClaimNames.SUB)

    object KeycloakClaims {
        const val SCOPE = "scope"
        const val REALM_ACCESS = "realm_access"
        const val REALM_ACCESS_ROLE = "role"
        const val RESOURCE_ACCESS = "resource_access"
        const val PREFERRED_USERNAME = "preferred_username"
    }

    object KeycloakRolePrefix {
        const val SCOPE = "SCOPE_"
        const val REALM_ACCESS = "REALM_"
        const val RESOURCE_ACCESS = "RESOURCE_"
    }
}
