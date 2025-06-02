import gradle.kotlin.dsl.accessors._991edba3f24be1490f58c01fb6d0b091.implementation

plugins {
    id("global-convention")
    kotlin("plugin.spring")
}

dependencies {
    implementation(libs.spring.boot.starter)
    implementation(libs.jackson.module.kotlin)

    testImplementation(libs.spring.boot.starter.test)
}
