---
sidebar_position: 3
---

# React with React Router

These are the installation instructions for [React](https://react.dev) with [React Router v6](https://reactrouter.com). Installation for any web frameworks can be found [here](other-web).

For a working example, please checkout our [examples repo](https://github.com/catalyst-monitor/catalyst-examples).

## Add the dependencies

To get started, add the Catalyst dependencies:

```bash title="Terminal"
npm install @catalyst-monitor/core @catalyst-monitor/react-router

# Alternatively, if you use Yarn:
yarn add @catalyst-monitor/core @catalyst-monitor/react-router
```

## Initialize the library

Initialize the library as early as possible:

```ts title="index.ts"
import { installWebBase } from '@catalyst-monitor/core/web'

installWebBase({
  version: '<YOUR VERSION CODE HERE>', // Any to differentiate different deploys, e.g. Git commit SHA
  systemName: 'catalyst-js-react-example',  // The name given to this service. All endpoints will be grouped by this name.
  userAgent: navigator.userAgent,
  publicKey: '<YOUR PUBLIC KEY HERE>', // The public key from the "Settings" page in the Catalyst dashboard.
})
```

## Record Navigation Events

To record navigation events, simply wrap your existing routes with Catalyst.

```ts
import {
  Outlet,
  useLocation,
  createBrowserRouter,
} from 'react-router-dom'
import { wrapRoutes } from '@catalyst-monitor/react-router'

const router = createBrowserRouter(
  // Wrap your React Router routes with Catalyst.
  wrapRoutes(
    [
      // Your routes, as-is, here.
    ],
    // Pass-through React context-dependent code.
    // This is required, because React context is module-scoped.
    {
      Outlet,
      useLocation,
    }
  )
)
```

## Propagate Session Info

Replace `fetch(...)` calls to servers with Catalyst installed with the provided `catalystWebFetch`. This will ensure session info is correctly propagated.

Note that `catalystWebFetch` has the same interface as `fetch`, so you can simply drop the new function in.

```ts title="api.ts"

import { catalystWebFetch as cFetch } from '@catalyst-monitor/core/web'

await cFetch("/api/widget/123", {
  method: method,
})
```

