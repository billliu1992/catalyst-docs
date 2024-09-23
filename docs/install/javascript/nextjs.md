---
sidebar_position: 1
---

# Next.js (App Router)

You can install the client library for [Next.js](https://nextjs.org/) to immediately get the full feature set of Catalyst, including:

- Frontend navigation, error reporting, and click tracking
- Server logs, request, and error reporting
- Session tracking across the stack

For other languages and frameworks, checkout our [other installation guides](/docs/category/install-catalyst).

Before you start, you'll need to sign up for Catalyst and have your keys ready, as detailed [here](/docs/signup).

## Add the dependency

To get started, add the Catalyst dependency:

```bash title="Terminal"
npm install @catalyst-monitor/nextjs@^0.1.1

# Alternatively, if you use Yarn:
yarn add @catalyst-monitor/nextjs@^0.1.1
```

## Update your Next.js config

Wrap your existing Next.js configuration with `withCatalystConfig`. This will auto-instrument Catalyst code for your entire Next.js app.

:::note
This turns on the [instrumentation hook](https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation), which is used in the next step.
:::

```javascript title="next.config.mjs"
import * as catalystConfig from "@catalyst-monitor/nextjs/config";

/** @type {import('next').NextConfig} */
export default catalystConfig.withCatalystConfig({
  // Strict Mode causes effects to be ran twice.
  // Since Catalyst sometimes runs in effects, this causes
  // double-reporting of events.
  reactStrictMode: false,

  // Your existing Next.JS config...
});
```

## Start Catalyst on the server

In the [instrumentation hook](https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation), start and configure Catalyst.

```typescript title="instrumentation.ts"
import CatalystNextJS from "@catalyst-monitor/nextjs";

export async function register() {
  CatalystNextJS.start({
    privateKey: "<YOUR PRIVATE KEY HERE>", // The private key from the "Settings" page in the Catalyst dashboard.
    publicKey: "<YOUR PUBLIC KEY HERE>", // The public key from the "Settings" page.
    version: "<YOUR VERSION CODE HERE>", // Any string to differentiate different deploys, e.g. Git commit SHA
    systemName: "catalyst-nextjs-example", // Any string to differentiate this service.
  });
}
```

## Start Catalyst on the client.

As soon as possible, add the `CatalystInstaller` component. This component will ensure everything happening client-side is captured. We recommend adding this in the root layout, if possible.

```typescript title="app/layout.ts"
import { CatalystInstaller } from "@catalyst-monitor/nextjs/server";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CatalystInstaller />
      {children}
    </>
  );
}
```

## Limitations

Currently, the Next.JS client library has the following limitations:

- Does not support Page Router
- Server Actions are not auto-instrumented

If you require any of those features, please [get in touch](mailto:bill@privium.xyz).
