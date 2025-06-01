package flio

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication


@SpringBootApplication
class FiloBootstrap

fun main(args: Array<String>) {
    runApplication<FiloBootstrap>(*args)
}
