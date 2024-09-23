# Javalin

:::note
The code snippets are in Kotlin, but the equivalent code should work in Java and other JVM languages. For help, feel free to reach out [through e-mail](mailto:bill@privium.xyz) or [via Discord](https://discord.gg/YQZy4SXzmX).
:::

These are the installation instructions for the current version of [Javalin](https://javalin.io/).

Before you start, you'll need to sign up for Catalyst and have your keys ready, as detailed [here](/docs/signup).

## 1. Add the dependencies

Add the dependencies required for Catalyst.

```xml title="Maven"
<dependency>
    <groupId>com.catalystmonitor.client</groupId>
    <artifactId>catalyst-core</artifactId>
    <version>0.1.1</version>
</dependency>
<dependency>
    <groupId>com.catalystmonitor.client</groupId>
    <artifactId>catalyst-javalin</artifactId>
    <version>0.1.1</version>
</dependency>
```

```kotlin title="Gradle (Kotlin)"
implementation("com.catalystmonitor.client:catalyst-core:0.1.1")
implementation("com.catalystmonitor.client:catalyst-javalin:0.1.1")
```

## 2. Initialize Catalyst, and install the Javalin plugin.

```kotlin
import com.catalystmonitor.client.core.Catalyst
import com.catalystmonitor.client.core.CatalystConfig
import com.catalystmonitor.client.javalin.CatalystPlugin

fun main(args: Array<String>) {
    Catalyst.start(
        CatalystConfig(
            privateKey = "<YOUR PUBLIC KEY HERE>", // The public key from the "Settings" page.
            version: "<YOUR VERSION CODE HERE>", // Any string to differentiate different deploys, e.g. Git commit SHA
            systemName = "catalyst-javalin-example", // Any string to differentiate this service.
        )
    )
    Javalin.create { config ->
        config.registerPlugin(CatalystPlugin {
            // Optionally, limit the paths monitored by Catalyst.
            // It uses the Javalin path pattern.
            // it.endpoints.add("/api/*")
        })
        // The rest of configuration here...
    }
}
```

## (Optional) 3. Add logging framework integration

To report logs to Catalyst, you can use one of our client libraries for logging like [Log4j2](./log4j2).

## Finished!

You've now finished the Catalyst setup! If you have any issues during set up, please reach out either [through e-mail](mailto:bill@privium.xyz) or [via Discord](https://discord.gg/YQZy4SXzmX).
