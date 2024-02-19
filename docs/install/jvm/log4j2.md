# Log4j2

The integration for [Log4j2](https://logging.apache.org/log4j/2.x/) supports automatically associating logs with a user's session and sending log messages to Catalyst.

Before you start, you'll need to sign up for Catalyst and have your keys ready, as detailed [here](/docs/signup).

## 1. Add the dependencies

Add the dependencies required for Catalyst.

```xml title="Maven"
<dependency>
    <groupId>com.catalystmonitor.client</groupId>
    <artifactId>catalyst-core</artifactId>
    <version>0.0.1</version>
</dependency>
<dependency>
    <groupId>com.catalystmonitor.client</groupId>
    <artifactId>catalyst-javalin</artifactId>
    <version>0.0.1</version>
</dependency>
```

```kotlin title="Gradle (Kotlin)"
implementation("com.catalystmonitor.client:catalyst-core:0.0.1")
implementation("com.catalystmonitor.client:catalyst-javalin:0.0.1")
```

## 2. Initialize Catalyst

```kotlin
CatalystServer
    .createInstance(
        CatalystServer.Options(
            privateKey = "KEY-HERE", // Private key from dashboard
            version = "abc", // Any string depicting version, like Git commit hash
            systemName = "foo-backend", // Any name, separating this system from others.
            disabled = false, // Optionally, disable for local development.
        )
    )
    .start()
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

## 4. Wrap your sessions

:::note
Instead of manually wrapping your sessions, it's recommended to use a library for your framework like [Javalin](./javalin).

If your framework isn't currently supported, please reach out either [through e-mail](mailto:bill@privium.xyz) or [via Discord](https://discord.gg/YQZy4SXzmX) and we'd be happy to consider implementing a client library for your framework of choice.
:::

```kotlin
val logger = LoggerFactory.getLogger("example")

CatalystServer.Context.setLocal(
    ServerRequestContext(
        fetchId = UUID.randomUUID().toString(),
        sessionId = sessionId,
        pageViewId = ctx.header(CommonStrings.PAGE_VIEW_ID_HEADER),
        parentFetchId = ctx.header(CommonStrings.PARENT_FETCH_ID_HEADER),
    )
)

val e = RuntimeException()
logger
    .atError()
    // This exception and stack trace will be sent to Catalyst
    .setCause(e)
    // Both the message pattern and parameter values will be sent to Catalyst.
    .log("This is a message with parameters: {}", 45)

CatalystServer.Context.removeLocal()
```

## Finished

