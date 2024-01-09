---
sidebar_position: 6
---

# Other Node.JS Server Framework

:::note
Before you manually instrument, please check if we provide a package for your choice of HTTP server! If we don't provide a package, we'd
still like to work with you. Please reach out either [through e-mail](mailto:bill@privium.xyz) or [via Discord](https://discord.gg/JdREEFfB).
:::

For a working example, please checkout our [examples repo](https://github.com/catalyst-monitor/catalyst-examples).

## Add the dependency

To get started, add the core Javascript library to your Node.js application:

```bash title="Terminal"
npm install @catalyst-monitor/core

# Alternatively, if you use Yarn:
yarn add @catalyst-monitor/core
```

## Initialize the library

Initialize the library as early as possible:

```ts title="index.ts"
import { installNodeBase } from '@catalyst-monitor/core/node'

const sdf = installNodeBase({
  privateKey: '<YOUR PRIVATEY KEY HERE>', // The private key from the "Settings" page in the Catalyst dashboard.
  systemName: 'catalyst-js-express-example',  // The name given to this service. All endpoints will be grouped by this name.
  version: '<YOUR VERSION CODE HERE>', // Any to differentiate different deploys, e.g. Git commit SHA
})
```

## Instrumenting

Being able to breakdown your errors and logs by HTTP request can greatly speed up your triage and debugging processes.

An example of the Express instrumentation code can be found [here](https://github.com/catalyst-monitor/catalyst-js/blob/main/packages/express/src/index.ts).

### Creating a Context

In order for Catalyst to associate logs and errors to the individual request, you'll need to create a context. You can do so by calling `getCatalystWeb().recordPageView(...)`.

```ts
import {
  createCatalystContext,
  ServerRequestContext,
  SESSION_ID_HEADER,
  PAGE_VIEW_ID_HEADER,
  PARENT_FETCH_ID_HEADER,
} from '@catalyst-monitor/core/node'

const context: ServerRequestContext = {
    fetchId: crypto.randomUUID(),
    sessionId: 'SESSION_ID_HERE', // Value of header from SESSION_ID_HEADER
    pageViewId: 'PAGE_VIEW_ID', // Value of header from PAGE_VIEW_ID_HEADER
    parentFetchId: 'PARENT_FETCH_ID', // Value of header from PARENT_FETCH_ID_HEADER
}

createCatalystContext(context, () => {
    // Your endpoint code here.
})
```

Afterwards, you can obtain and pass this context object when calling Catalyst:

```ts
import { getCatalystNode, getCatalystContext } from '@catalyst-monitor/core/node'

const context = getCatalystContext()
if (context != null) {
    getCatalystNode().recordLog('error', e, {}, context)
}
```

### Recording an HTTP Request

To record an HTTP request, simply take the context you've created, and pass it into `recordFetch`.

```ts
import { getCatalystNode, getCatalystContext } from '@catalyst-monitor/core/node'

const context = getCatalystContext()

if (context != null) {
    getCatalystNode().recordFetch(
         // The HTTP method, e.g. get, post, put
        'get',

        // The path pattern, unreplaced.
        '/widgets/:widgetId',

        // The path parameter values.
        { widgetId: 'a' },

        // The HTTP status code, as a number.
        200,

        {
            seconds: 5, // Number of seconds this request took.
            nanos: 0, // Number of nanoseconds after the second.
        },
        context)
}
```

Catalyst is not opinionated on the format of the path pattern. For best results, always pass in the path pattern and param separately. This will give you an aggregate view of logs and errors per path pattern, while still letting you drill down on individual visits.

## Propagate Session Info

Replace `fetch(...)` calls to servers with Catalyst installed with the provided `catalystNodeFetch`. This will ensure session info is correctly propagated.

Note that `catalystNodeFetch` has the same interface as `fetch`, so you can simply drop the new function in.

```ts title="api.ts"
import { catalystNodeFetch as cFetch } from '@catalyst-monitor/core/node'

await cFetch("/api/widget/123", {
  method: method,
})
```
