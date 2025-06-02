package flio.security

import flio.security.oauth2.keycloak.KeycloakJwtTokenConverter
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity
import org.springframework.security.config.annotation.web.HttpSecurityDsl
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.invoke
import org.springframework.security.web.SecurityFilterChain

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
class SecurityConfig {
    @Bean
    fun filterChain(http: HttpSecurity): SecurityFilterChain {
        http { // HttpSecurityDsl
            csrf { // TODO: csrf 임시 disable
                disable()
            }

            configureAuthorizHttpRequests()
            configureOauth2ResourceServer()
        }

        return http.build()
    }

    // TODO: 접근 PATH 요건 구체화 후 요건에 따라 접근 제한
    private fun HttpSecurityDsl.configureAuthorizHttpRequests() {
        authorizeHttpRequests {
            authorize("/**", permitAll)
//            authorize("/private/**", authenticated)
        }
    }

    // TODO: Keycloak 설정 후 주석 제거하여 기능 확인. JWT Decoder 도 정의 필요
    private fun HttpSecurityDsl.configureOauth2ResourceServer() {
        oauth2ResourceServer {
            jwt {
                jwtAuthenticationConverter = KeycloakJwtTokenConverter()
            }
        }
    }
}
