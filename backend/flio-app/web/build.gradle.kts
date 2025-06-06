plugins {
    `spring-boot-convention`
}

dependencies {
    implementation(project(":flio-core"))
    implementation(project(":flio-jpa"))

    implementation(libs.spring.boot.starter.web)
    implementation(libs.spring.boot.starter.security)
    implementation(libs.spring.boot.starter.oauth2.resource.server)
}
