package flio

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.properties.ConfigurationPropertiesScan
import org.springframework.boot.runApplication


@SpringBootApplication
@ConfigurationPropertiesScan
class FiloWebApp

fun main(args: Array<String>) {
    runApplication<FiloWebApp>(*args)
}
