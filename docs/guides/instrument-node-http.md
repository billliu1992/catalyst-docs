---
sidebar_position: 3
---

# Manually Instrumenting Node.JS HTTP Server

:::note
Please check if we provide a package for your choice of HTTP server, before manually instrumenting!
:::

Being able to breakdown your errors and logs by HTTP request can greatly speed up your triage and debugging processes.

An example of a working implementation can be found [here](https://github.com/catalyst-monitor/catalyst-js/blob/main/packages/express/src/index.ts).

## Creating a Context

In order for Catalyst to associate logs and errors to the individual request, you'll need to create a context. You can do so by calling `getCatalystWeb().recordPageView(...)`.

```ts
import {
  createCatalystContext,
  ServerRequestContext,
  SESSION_ID_HEADER,
  PAGE_VIEW_ID_HEADER,
  PARENT_FETCH_ID_HEADER,
} from '@catalyst-monitor/core'

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
import { getCatalystNode, getCatalystContext } from '@catalyst-monitor/core'

const context = getCatalystContext()
if (context != null) {
    getCatalystNode().recordLog('error', e, {}, context)
}
```

## Recording an HTTP Request

To record an HTTP request, simply take the context you've created, and pass it into `recordFetch`.

```ts
import { getCatalystNode, getCatalystContext } from '@catalyst-monitor/core'

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