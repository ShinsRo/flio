plugins {
    `spring-boot-convention`
}

dependencies {
    implementation(project(":flio-core"))

    implementation(libs.spring.boot.starter)
}
