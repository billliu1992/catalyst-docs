---
sidebar_position: 5
---

# Other Web Frameworks

:::note
Before manually instrumenting, please check if we provide a package for your choice of framework! If we don't provide a package, we'd
still like to work with you. Please reach out either [through e-mail](mailto:bill@privium.xyz) or [via Discord](https://discord.gg/wm3gDnfT).
:::

For a working example, please checkout our [examples repo](https://github.com/catalyst-monitor/catalyst-examples).

## Add the dependency

To get started, add the core Javascript library to your client:

```bash title="Terminal"
npm install @catalyst-monitor/core

# Alternatively, if you use Yarn:
yarn add @catalyst-monitor/core
```

## Initialize the library

Initialize the library as early as possible:

```ts title="index.ts"
import { installWebBase } from '@catalyst-monitor/core'

installWebBase({
  version: '<YOUR VERSION CODE HERE>', // Any to differentiate different deploys, e.g. Git commit SHA
  systemName: 'catalyst-js-react-example',  // The name given to this service. All endpoints will be grouped by this name.
  userAgent: navigator.userAgent,
  publicKey: '<YOUR PUBLIC KEY HERE>', // The public key from the "Settings" page in the Catalyst dashboard.
})
```

## Manually Instrumenting

Being able to breakdown your errors and logs by page can greatly speed up your triage and debugging processes.

An example of how we instrument Catalyst for React Router can be found [here](https://github.com/catalyst-monitor/catalyst-js/blob/main/packages/react-router/src/Catalyst.tsx).

In order for Catalyst to associate logs and errors to the page the user is currently on, you'll need to let Catalyst know when the user changes page by calling `getCatalystWeb().recordPageView(...)`.

```ts
import { getCatalystWeb } from '@catalyst-monitor/core'

getCatalystWeb().recordPageView('/', {})
```

`recordPageView` takes a path pattern, and the path params associated with the pattern. Catalyst is not opinionated on the format of the path pattern, so we suggest you pass in the pattern as returned from your navigation library.

```ts
// This works
getCatalystWeb().recordPageView('/widgets/:widgetId', { widgetId: string })

// Or this
getCatalystWeb().recordPageView('/widgets/{widgetId}', { widgetId: string })
```

For best results, always pass in the path pattern and param separately. This will give you an aggregate view of logs and errors per path pattern, while still letting you drill down on individual visits.

## Propagate Session Info

Replace `fetch(...)` calls to servers with Catalyst installed with the provided `catalystWebFetch`. This will ensure session info is correctly propagated.

Note that `catalystWebFetch` has the same interface as `fetch`, so you can simply drop the new function in.

```ts title="api.ts"

import { catalystWebFetch as cFetch } from '@catalyst-monitor/core'

await cFetch("/api/widget/123", {
  method: method,
})
```

