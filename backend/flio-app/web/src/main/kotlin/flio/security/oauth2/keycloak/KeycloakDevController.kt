package flio.security.oauth2.keycloak

import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.security.oauth2.jwt.Jwt
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/dev/api/keycloak")
class KeycloakDevController {
    @GetMapping("/public/message")
    fun getPublicMessage(): String {
        return "접근 제한 테스트를 위한 임시 응답 for 퍼블릭"
    }

    @GetMapping("/private/message")
    @PreAuthorize("hasAuthority('SCOPE_profile')")
    fun getPrivateMessage(@AuthenticationPrincipal jwt: Jwt): String {
        return "접근 제한 테스트를 위한 임시 응답 for ${jwt.subject}"
    }
}
