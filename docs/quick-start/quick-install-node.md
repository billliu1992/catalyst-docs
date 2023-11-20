---
sidebar_position: 2
---

# Quick Start on Node.js

## Initialize the Library

To get started, add the core Javascript library to your Node.js application:

```bash title="Terminal"
npm install @catalyst-monitor/core

# Alternatively, if you use Yarn:
yarn add @catalyst-monitor/core
```

Initialize the library as early as possible:

```ts title="index.ts"
import { installNodeBase } from '@catalyst-monitor/core'

const sdf = installNodeBase({
  privateKey: '<YOUR PRIVATEY KEY HERE>', // The private key from the "Settings" page in the Catalyst dashboard.
  systemName: 'catalyst-js-express-example',
  version: '<YOUR VERSION CODE HERE>', // Any to differentiate different deploys, e.g. Git commit SHA
})
```

## Record HTTP requests

You can record HTTP requests and their statuses by installing a library for your framework, or manually instrumenting yourself.

Currently, we have a library for [Express](https://expressjs.com/). Feel free to [reach out](mailto:bill@privium.xyz) if you'd like to see your framework supported.

First, add the package.

```bash title="Terminal"
npm install @catalyst-monitor/express
```

Afterwards, wrap your code with the library.

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
import { catalystNodeFetch as cFetch } from '@catalyst-monitor/core'

await cFetch("/api/widget/123", {
  method: method,
})
```
