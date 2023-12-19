---
sidebar_position: 3
---

# Express.js

These are the installation instructions for [Express](https://expressjs.com/). Installation for generic Node.js frameworks can be found [here](other-node).

For a working example, please checkout our [examples repo](https://github.com/catalyst-monitor/catalyst-examples).

## Add the dependencies

To get started, add the Catalyst dependencies:

```bash title="Terminal"
npm install @catalyst-monitor/core @catalyst-monitor/express

# Alternatively, if you use Yarn:
yarn add @catalyst-monitor/core @catalyst-monitor/express
```

## Initialize the library

Initialize the library as early as possible:

```ts title="index.ts"
import { installNodeBase } from '@catalyst-monitor/core/node'

const sdf = installNodeBase({
  privateKey: '<YOUR PRIVATEY KEY HERE>', // The private key from the "Settings" page in the Catalyst dashboard.
  systemName: 'catalyst-js-express-example',
  version: '<YOUR VERSION CODE HERE>', // Any to differentiate different deploys, e.g. Git commit SHA
})
```

## Record HTTP requests

Install the two Catalyst middleware functions, to record requests and logs.

```ts title="app.ts"
import express from 'express'
import {
  catalystErrorHandler,
  catalystHandler,
} from '@catalyst-monitor/express'

const app = express()

// The Catalyst middleware should be installed as early as possible
// to propagate any context and capture any logs and errors.
app.use(catalystHandler)

// YOUR ROUTES HERE!

// The Catalyst error handler should be installed as late as possible
// to record any uncaught errors.
app.use(catalystErrorHandler)
```

## Propagate Session Info

Replace `fetch(...)` calls to servers with Catalyst installed with the provided `catalystNodeFetch`. This will ensure session info is correctly propagated.

Note that `catalystNodeFetch` has the same interface as `fetch`, so you can simply drop the new function in.

```ts title="api.ts"
import { catalystNodeFetch as cFetch } from '@catalyst-monitor/core/node'

await cFetch("/api/widget/123", {
  method: method,
})
```
