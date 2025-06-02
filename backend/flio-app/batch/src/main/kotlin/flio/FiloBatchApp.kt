package flio

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication


@SpringBootApplication
class FiloBatchApp

fun main(args: Array<String>) {
    runApplication<FiloBatchApp>(*args)
}
