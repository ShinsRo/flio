plugins {
    `spring-boot-convention`
}

dependencies {
    implementation(libs.spring.boot.starter.data.jpa)
    implementation(libs.mysql.connector)
    implementation(libs.liquibase.core)
}
