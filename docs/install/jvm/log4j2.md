# Log4j2

The integration for [Log4j2](https://logging.apache.org/log4j/2.x/) supports automatically associating logs with a user's session and sending log messages to Catalyst.

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
    <artifactId>catalyst-log4j2</artifactId>
    <version>0.1.1</version>
</dependency>
```

```kotlin title="Gradle (Kotlin)"
implementation("com.catalystmonitor.client:catalyst-core:0.1.1")
implementation("com.catalystmonitor.client:catalyst-log4j2:0.1.1")
```

## 2. Initialize Catalyst

```kotlin
import com.catalystmonitor.client.core.Catalyst
import com.catalystmonitor.client.core.CatalystConfig

Catalyst.start(
    CatalystConfig(
        privateKey = "<YOUR PUBLIC KEY HERE>", // The public key from the "Settings" page.
        version: "<YOUR VERSION CODE HERE>", // Any string to differentiate different deploys, e.g. Git commit SHA
        systemName = "catalyst-log4j2-example", // Any string to differentiate this service.
    )
)
```

## 3. Add CatalystAppender to your Log4j2 configuration

```xml title="resources/log4j2.xml"
<Configuration status="WARN" monitorInterval="30" packages="com.catalystmonitor.client.log4j2">
    <Properties>
        <Property
                name="COLOR_LOG_PATTERN">%d{yyyy-MM-dd HH:mm:ss.SSS} %highlight{${LOG_LEVEL_PATTERN:-%5p}}{FATAL=red, ERROR=red, WARN=yellow, INFO=green, DEBUG=blue, TRACE=blue} %style{%pid}{magenta} [%t] %style{%C{1.}}{cyan}: %m%n%ex
        </Property>
    </Properties>

    <Appenders>
        <Console name="Console" target="SYSTEM_OUT" follow="true">
            <PatternLayout pattern="${COLOR_LOG_PATTERN}"/>
        </Console>

        <!-- This appender automatically sends logs to Catalyst -->
        <CatalystAppender name="CatalystAppender"/>
    </Appenders>

    <Loggers>
        <Root level="INFO">
            <AppenderRef ref="Console"/>
            <AppenderRef ref="CatalystAppender"/>
        </Root>
    </Loggers>
</Configuration>
```

## 4. Wrap endpoint handlers with Catalyst

:::note
Instead of manually wrapping your sessions, it's recommended to use a library for your framework like [Javalin](./javalin).

If your framework isn't currently supported, please reach out either [through e-mail](mailto:bill@privium.xyz) or [via Discord](https://discord.gg/YQZy4SXzmX) and we'd be happy to consider implementing a client library for your framework of choice.
:::

```kotlin
import com.catalystmonitor.client.core.Catalyst
import com.catalystmonitor.client.core.ServerAction
import org.apache.logging.log4j.LogManager

val logger = LogManager.getLogger("log-name-or-class-here")

val span = Catalyst.getReporter().startServerAction(
    ServerAction(
        // All the handler information here...
    )
)
span.makeCurrent().use {
    // Inside this try-with-resources block, all logs will be sent to Catalyst
    // associated with this server call.
    val e = RuntimeException()
    logger
        .atError()
        // This exception and stack trace will be sent to Catalyst
        .setCause(e)
        // Both the message pattern and parameter values will be sent to Catalyst.
        .log("This is a message with parameters: {}", 45)
}
```

## Ignore logs for Catalyst

You can set logs to be ignored with Catalyst.

This is extremely helpful for cases like access logs, where the information captured is redundant with the information captured by Catalyst, but you still want the information logged.

```
import com.catalystmonitor.client.log4j2.CATALYST_IGNORED_MARKER
import org.apache.logging.log4j.LogManager

val logger = LogManager.getLogger("log-name-or-class-here")

logger.atInfo()
    .withMarker(CATALYST_IGNORED_MARKER)
    // Any fluent log methods here...
    .log("I won't be sent to Catalyst!")
```
