---
sidebar_position: 6
---

# Other Node.JS Server Framework

:::note
Before you manually instrument, please check if we provide a package for your choice of HTTP server! If we don't provide a package, we'd
still like to work with you. Please reach out either [through e-mail](mailto:bill@privium.xyz) or [via Discord](https://discord.gg/YQZy4SXzmX).
:::

For a working example, please checkout our [examples repo](https://github.com/catalyst-monitor/catalyst-examples).

## Add the dependency

To get started, add the core Javascript library to your Node.js application:

```bash title="Terminal"
npm install @catalyst-monitor/server@^0.1.1

# Alternatively, if you use Yarn:
yarn add @catalyst-monitor/server@^0.1.1
```

## Initialize the library

Initialize the library as early as possible:

```ts title="index.ts"
import Catalyst from "@catalyst-monitor/server";

Catalyst.start({
  privateKey: "<YOUR PRIVATE KEY HERE>", // The private key from the "Settings" page in the Catalyst dashboard.
  systemName: "catalyst-js-express-example", // Any string to differentiate this service.
  version: "<YOUR VERSION CODE HERE>", // Any string to differentiate different deploys, e.g. Git commit SHA
});
```

## Instrumenting

Being able to breakdown your errors and logs by HTTP request can greatly speed up your triage and debugging processes.

An example of the Express instrumentation code can be found [here](https://github.com/catalyst-monitor/catalyst-js/blob/main/packages/express/src/index.ts).

### Recording an HTTP Request

To record an HTTP request, simply wrap your endpoint logic with `recordServerAction`.

Ideally, this wrapping happens within a middleware layer, so you don't need to wrap every endpoint individually.

```ts
import Catalyst from "@catalyst-monitor/server";

Catalyst.getReporter().recordServerAction(
  {
    method: "get", // Any method string, like 'get', 'post', 'put', or even a custom string.
    pathPattern: "/todos/{todoId}", // The pattern used by the action to serve this request
    rawPath: "/todos/abc123", // The actual path
    args: { todoId: "abc123" },
    headers: {
      /* all headers */
    }, // All the headers. The headers will be used for propagation.
  },
  async (setStatusCode) => {
    // Do work here...

    // Within this callback, console logs will automatically get reported and associated
    // with this action by default.
    console.warn("This is a warning");

    setStatusCode(200);
  }
);
```

Catalyst is not opinionated on the format of the path pattern. For best results, always pass in the path pattern and param separately. This will give you an aggregate view of logs and errors per path pattern, while still letting you drill down on individual visits.

## (Optional) Associating User Info

You can associate user info with the current request context using `setUserInfo` inside the callback for `recordServerAction`. This will show up in the Catalyst dashboard UI associated with the request, and may help you debug.

Note that `setUserInfo` is not opinionated about the ID or username format, and will not enforce uniqueness. You can set it to whatever you want. All it does is send it to Catalyst to display.

```ts
import Catalyst from "@catalyst-monitor/server";

Catalyst.getReporter().recordServerAction(
  {
    // See above
  },
  async (setStatusCode) => {
    Catalyst.getReporter().setUserInfo({
      loggedInName: "any-string",
      loggedInId: "any-string",
    });

    // Removes the user info for the current request, if it's been previously set.
    // Does nothing if no user info was set.
    Catalyst.getReporter().setUserInfo(null);
  }
);
```
