package flio.auth.keycloak

object KeycloakJwtTokenTestData {
    /**
     * {
     *   "exp": 1699518946,
     *   "iat": 1699518646,
     *   "jti": "7e9e51b4-7c97-427b-b2ec-c054b20ab030",
     *   "iss": "https://keycloak.example.io/realms/keycloak-demo",
     *   "aud": "account",
     *   "sub": "341605b2-e44b-4cd0-a46c-a06335aaa5db",
     *   "typ": "Bearer",
     *   "azp": "jwt-demo",
     *   "session_state": "56040fa7-2bf4-4daf-9b8a-a3f4ff8aec71",
     *   "acr": "1",
     *   "allowed-origins": [
     *     "/\*"
     *   ],
     *   "realm_access": {
     *     "roles": [
     *       "default-roles-keycloak-demo",
     *       "offline_access",
     *       "uma_authorization"
     *     ]
     *   },
     *   "resource_access": {
     *     "account": {
     *       "roles": [
     *         "manage-account",
     *         "manage-account-links",
     *         "view-profile"
     *       ]
     *     }
     *   },
     *   "scope": "groups email profile user_id",
     *   "sid": "56040fa7-2bf4-4daf-9b8a-a3f4ff8aec71",
     *   "email_verified": true,
     *   "name": "Jane Doe",
     *   "groups": [
     *     "support"
     *   ],
     *   "preferred_username": "jane.doe",
     *   "given_name": "Jane",
     *   "family_name": "Doe",
     *   "email": "jane.doe@traefik-airlines.io"
     * }
     * */
    val rawJwt: String
        get() = """
          eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTk1MTg5NDYsImlhdCI6MTY5OTUxODY0NiwianRpIjoiN2U5ZTUxYjQtN2
          M5Ny00MjdiLWIyZWMtYzA1NGIyMGFiMDMwIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5leGFtcGxlLmlvL3JlYWxtcy9rZXljbG9hay1kZ
          W1vIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjM0MTYwNWIyLWU0NGItNGNkMC1hNDZjLWEwNjMzNWFhYTVkYiIsInR5cCI6IkJlYXJlciIs
          ImF6cCI6Imp3dC1kZW1vIiwic2Vzc2lvbl9zdGF0ZSI6IjU2MDQwZmE3LTJiZjQtNGRhZi05YjhhLWEzZjRmZjhhZWM3MSIsImFjciI6IjE
          iLCJhbGxvd2VkLW9yaWdpbnMiOlsiLyoiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMta2V5Y2xvYWstZGVtby
          IsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbI
          m1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Imdyb3VwcyBlbWFpbCBw
          cm9maWxlIHVzZXJfaWQiLCJzaWQiOiI1NjA0MGZhNy0yYmY0LTRkYWYtOWI4YS1hM2Y0ZmY4YWVjNzEiLCJlbWFpbF92ZXJpZmllZCI6dHJ
          1ZSwibmFtZSI6IkphbmUgRG9lIiwiZ3JvdXBzIjpbInN1cHBvcnQiXSwicHJlZmVycmVkX3VzZXJuYW1lIjoiamFuZS5kb2UiLCJnaXZlbl
          9uYW1lIjoiSmFuZSIsImZhbWlseV9uYW1lIjoiRG9lIiwiZW1haWwiOiJqYW5lLmRvZUB0cmFlZmlrLWFpcmxpbmVzLmlvIn0.3NcJ3sbIt
          ZmPLe6ZAome17yT-50MM6mjumeh9ROvNfE"  
        """.trimIndent().replace("\n", "")
}