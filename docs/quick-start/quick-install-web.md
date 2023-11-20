---
sidebar_position: 1
---

# Quick Start on Web

## Initialize the library

To get started, add the core Javascript library to your client:

```bash title="Terminal"
npm install @catalyst-monitor/core

# Alternatively, if you use Yarn:
yarn add @catalyst-monitor/core
```

Initialize the library as early as possible:

```ts title="index.ts"
import { installWebBase } from '@catalyst-monitor/core'

installWebBase({
  version: '<YOUR VERSION CODE HERE>', // Any to differentiate different deploys, e.g. Git commit SHA
  systemName: 'catalyst-js-react-example',
  userAgent: navigator.userAgent,
  publicKey: '<YOUR PUBLIC KEY HERE>', // The public key from the "Settings" page in the Catalyst dashboard.
})
```

## Record Navigation Events

You can record navigation events by installing a provided library for your navigation framework, or manually instrumenting yourself.

Currently, we have a library for [React Router v6](https://reactrouter.com). Feel free to [reach out](mailto:bill@privium.xyz) if you'd like to see your navigation library supported.

First, add the package.

```bash title="Terminal"
npm install @catalyst-monitor/react-router
```

Afterwards, wrap your code with the library.

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

import { catalystWebFetch as cFetch } from '@catalyst-monitor/core'

await cFetch("/api/widget/123", {
  method: method,
})
```

