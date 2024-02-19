---
sidebar_position: 2
---

# SvelteKit

You can install the Catalyst client library for [SvelteKit](https://kit.svelte.dev/) to immediately get the full feature set of Catalyst, including:
- Frontend navigation, error reporting, and click tracking
- Server logs, request, and error reporting
- Session tracking across the stack

For other frameworks and languages, checkout our [other installation guides](/docs/category/install-catalyst).

Before you start, you'll need to sign up for Catalyst and have your keys ready, as detailed [here](/docs/signup).

## 1. Add the dependency

To get started, add the Catalyst dependencies:

```bash title="Terminal"
npm install @catalyst-monitor/sveltekit

# Alternatively, if you use Yarn:
yarn add @catalyst-monitor/sveltekit
```

## 2. Create or edit your hook files

Catalyst uses [hooks](https://kit.svelte.dev/docs/hooks) to get info and report on events. You can either create your hook files, or edit your hook files and wrap your existing handlers with the provided Catalyst functions.

```javascript title="src/hooks.client.js"
import {
  catalystClientErrorHandler,
  installWebBase,
} from '@catalyst-monitor/sveltekit/client'

installWebBase({
  systemName: `${PUBLIC_CATALYST_SYSTEM_NAME}-fe`,
  version: PUBLIC_CATALYST_VERSION,
  publicKey: PUBLIC_CATALYST_PUBLIC_KEY,
  userAgent: window.navigator.userAgent,
  disabled: false, // You can disable for dev environments if you wish.
})

export const handleError = catalystClientErrorHandler(() => {
  // Your existing error handling logic, if any.
})
```

```javascript title="src/hooks.server.js"
import {
  installNodeBase,
  catalystHandler,
  wrapCatalystFetchHandler,
  wrapCatalystServerErrorHandler,
} from '@catalyst-monitor/sveltekit/server'

installNodeBase({
  privateKey: CATALYST_PRIVATE_KEY,
  systemName: PUBLIC_CATALYST_SYSTEM_NAME,
  version: PUBLIC_CATALYST_VERSION,
  baseUrl: 'http://localhost:7070',
})

export const handleError = wrapCatalystServerErrorHandler(({ error }) => {
  // Your existing error handling logic, if any.
})

export const handleFetch = wrapCatalystFetchHandler([
  // All the base URLs to propagate session ID info to.
  // If a server has Catalyst installed, add the domain here and it will automatically receive the session info!
  //
  // At the very least, you should have the domain this Sveltekit server is hosted at, e.g.
  // 'https://app.catalystmonitor.com',
])

export const handle = catalystHandler
```

If you have your own `handle` function, you can use the Sveltekit-provided [`sequence`](https://kit.svelte.dev/docs/modules#sveltejs-kit-hooks) function to elegantly add them together.

We recommend putting the `catalystHandler` first, so any changes you make in your own handlers will be reflected in Catalyst.

```javascript
import { sequence } from '@sveltejs/kit/hooks';
export const handle = sequence(
  catalystHandler, // as imported in the above example,
  yourOwnHandler, // as defined by you.
)
```

## 2. Add the Catalyst component

As soon as possible, add the `Catalyst` component. This component will ensure navigation client-side is captured. We recommend adding this in the root `+layout.svelte`, if possible.

```svelte title="src/+layout.svelte"
<script>
  import Catalyst from '@catalyst-monitor/sveltekit/Catalyst.svelte'
</script>

<Catalyst />
<slot />
```

## Finished! Test your implementation.

You've finished setting up Catalyst! You can test your implementation by creating a component that always errors out:

```svelte title="+page.svelte"
<script>
  throw new Error('Error!')
</script>

<div>You should get an error!</div>
```

If you have any issues during set up, please reach out either [through e-mail](mailto:bill@privium.xyz) or [via Discord](https://discord.gg/YQZy4SXzmX).
