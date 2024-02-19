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

To get started, add the Catalyst dependencies:

```bash title="Terminal"
npm install @catalyst-monitor/nextjs

# Alternatively, if you use Yarn:
yarn add @catalyst-monitor/nextjs
```

## Update your Next.js config

Wrap your existing Next.js configuration with `withCatalystConfig`. This will auto-instrument Catalyst code for your entire Next.js app.

```javascript title="next.config.mjs"
import * as catalystConfig from '@catalyst-monitor/nextjs/config'
import catalyst from './catalyst.mjs'

/** @type {import('next').NextConfig} */
export default catalystConfig.withCatalystConfig(
  {
    // Optional but suggested:
    // Strict Mode causes effects to be ran twice in dev mode.
    // Since Catalyst sometimes runs in effects, this causes
    // double-reporting of events.
    reactStrictMode: false,

    // Your existing Next.js configuration here...
  },
  {
    systemName: 'catalyst-nextjs-example', // The name given to this service. All endpoints will be grouped by this name.
    publicKey: 'YOUR PUBLIC KEY HERE', // The public key from the "Settings" page in the Catalyst dashboard.
    privateKey: 'YOUR PRIVATE KEY HERE', // The private key from the "Settings" page in the Catalyst dashboard.
    version: 'YOUR VERSION CODE HERE', // Any to differentiate different deploys, e.g. Git commit SHA
  }
)
```

## Add the CatalystInstaller component

As soon as possible, add the `CatalystInstaller` component. This component will ensure everything happening client-side is captured. We recommend adding this in the root layout, if possible.

```typescript title="layout.ts"
import { CatalystInstaller } from '@catalyst-monitor/nextjs/server'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>
    <CatalystInstaller />
    {children}
  </>
}
```

## Propagate Session Info

Replace `fetch(...)` calls with the provided functions detailed below. This will ensure session info is correctly propagated.

Note that both functions have the same interface as `fetch`, so you can simply drop the new functions in.

### Server Components

Use `catalystNodeFetch` in server components.

```tsx title="page.tsx"
import { catalystNodeFetch as cFetch } from '@catalyst-monitor/nextjs/server'

export default async function Page() {
  const resp = await cFetch("/api/widget/123")
  // ... rest of your component code
}
```

### Client Components

Use `catalystWebFetch` in client components.

```tsx title="page.tsx"
'use client'

import { catalystWebFetch as cFetch } from '@catalyst-monitor/nextjs/client'

export default function Page() {
  useEffect(() => {
    const resp = await cFetch("/api/widget/123")
    // ...
  }, [])
  // ... rest of your component code
}
```

## Limitations

Currently, the Next.JS client library has the following limitations:

 - Does not support Page Router
 - Server Actions are not auto-instrumented

If you require any of those features, please [get in touch](mailto:bill@privium.xyz).