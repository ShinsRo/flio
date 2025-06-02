package flio

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication


@SpringBootApplication
class FiloWebApp

fun main(args: Array<String>) {
    runApplication<FiloWebApp>(*args)
}
