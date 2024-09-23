---
sidebar_position: 4
---

# Express.js

These are the installation instructions for [Express](https://expressjs.com/). Installation for generic Node.js frameworks can be found [here](other-node).

For a working example, please checkout our [examples repo](https://github.com/catalyst-monitor/catalyst-examples).

## Add the dependencies

To get started, add the Catalyst dependencies:

```bash title="Terminal"
npm install @catalyst-monitor/server@^0.1.1 @catalyst-monitor/express@^0.1.1

# Alternatively, if you use Yarn:
yarn add @catalyst-monitor/server@^0.1.1 @catalyst-monitor/express@^0.1.1
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

## Record HTTP requests

Install the two Catalyst middleware functions, to record requests and logs.

```ts title="app.ts"
import express from "express";
import {
  catalystErrorHandler,
  catalystHandler,
} from "@catalyst-monitor/express";

const app = express();

// The Catalyst middleware should be installed as early as possible
// to propagate any context and capture any logs and errors.
app.use(catalystHandler);

// YOUR ROUTES HERE!

// The Catalyst error handler should be installed as late as possible
// to record any uncaught errors.
app.use(catalystErrorHandler);
```
