plugins {
    `kotlin-dsl`
}

repositories {
    mavenCentral()
    gradlePluginPortal()
}

dependencies {
    implementation(files(libs.javaClass.superclass.protectionDomain.codeSource.location))

    implementation(libs.kotlin.gradle)
    implementation(libs.kotlin.allopen)
    implementation(libs.kotlin.noarg)

    implementation(libs.spring.boot.gradle)
}
