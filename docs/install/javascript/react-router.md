---
sidebar_position: 3
---

# React with React Router

These are the installation instructions for [React](https://react.dev) with [React Router v6](https://reactrouter.com). Installation for any web frameworks can be found [here](other-web).

For a working example, please checkout our [examples repo](https://github.com/catalyst-monitor/catalyst-examples).

## Add the dependencies

To get started, add the Catalyst dependencies:

```bash title="Terminal"
npm install @catalyst-monitor/core@^0.1.1 @catalyst-monitor/react-router^0.1.1

# Alternatively, if you use Yarn:
yarn add @catalyst-monitor/core^0.1.1 @catalyst-monitor/react-router^0.1.1
```

## Initialize the library

Initialize the library as early as possible:

```ts title="index.ts"
import Catalyst from "@catalyst-monitor/web";

Catalyst.start({
  publicKey: "<YOUR PUBLIC KEY HERE>", // The public key from the "Settings" page in the Catalyst dashboard.
  systemName: "catalyst-js-express-example", // Any string to differentiate this service.
  version: "<YOUR VERSION CODE HERE>", // Any string to differentiate different deploys, e.g. Git commit SHA
  userAgent: navigator.userAgent,
  systemName: "catalyst-js-react-example", // ANy string to differentiate this service.
});
```

## Record Navigation Events

To record navigation events, simply wrap your existing routes with Catalyst.

```ts
import { Outlet, useLocation, createBrowserRouter } from "react-router-dom";
import { wrapRoutes } from "@catalyst-monitor/react-router";

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
);
```
