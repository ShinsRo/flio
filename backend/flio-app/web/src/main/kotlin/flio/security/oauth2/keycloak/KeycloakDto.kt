package flio.security.oauth2.keycloak

data class RealmAccess(val roles: List<String> = emptyList())
data class ResourceAccess(val account: ResourceAccount = ResourceAccount())
data class ResourceAccount(val roles: List<String> = emptyList())
