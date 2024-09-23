---
sidebar_position: 2
---

# SvelteKit

You can install the Catalyst client library for [SvelteKit](https://kit.svelte.dev/) to immediately get the full feature set of Catalyst, including:

- Frontend navigation, error reporting, and click tracking
- Server logs, request, and error reporting
- Session tracking across the stack

A fully runnable example can be found [on Github][example].

For other frameworks and languages, checkout our [other installation guides](/docs/category/install-catalyst).

Before you start, you'll need to sign up for Catalyst and have your keys ready, as detailed [here](/docs/signup).

## 1. Add the dependency

To get started, add the Catalyst dependencies:

```bash title="Terminal"
npm install @catalyst-monitor/sveltekit@v0.1.1

# Alternatively, if you use Yarn:
yarn add @catalyst-monitor/sveltekit@v0.1.1
```

## 2. Create or edit your hook files

Catalyst uses [hooks](https://kit.svelte.dev/docs/hooks) to get info and report on events. You can either create your hook files, or edit your hook files and wrap your existing handlers with the provided Catalyst functions.

```javascript title="src/hooks.client.js"
import {
  Catalyst,
  catalystClientErrorHandler,
} from "@catalyst-monitor/sveltekit/client";

Catalyst.start({
  publicKey: "<YOUR PUBLIC KEY HERE>", // The public key from the "Settings" page.
  version: "<YOUR VERSION CODE HERE>", // Any string to differentiate different deploys, e.g. Git commit SHA
  systemName: "catalyst-sveltekit-example-fe", // Any string to differentiate this service.
  userAgent: window.navigator.userAgent,
});

export const handleError = catalystClientErrorHandler((error) => {
  // Your existing client error handler here...
});
```

```ts title="src/hooks.server.js"
import {
  catalystHandler,
  wrapCatalystFetchHandler,
  wrapCatalystServerErrorHandler,
  Catalyst,
} from "@catalyst-monitor/sveltekit/server";

installNodeBase({
  privateKey: "<YOUR PRIVATE KEY HERE>", // The private key from the "Settings" page in the Catalyst dashboard.
  version: "<YOUR VERSION CODE HERE>", // Any string to differentiate different deploys, e.g. Git commit SHA
  systemName: "catalyst-sveltekit-example", // Any string to differentiate this service.
});

// You can optionally pass in your existing handleError function.
export const handleError = wrapCatalystServerErrorHandler();

// You can optionally pass in your existing handleFetch function.
export const handleFetch = wrapCatalystFetchHandler();

// See below if you have an existing handle function.
export const handle = catalystHandler;
```

If you have your own `handle` function, you can use the Sveltekit-provided [`sequence`](https://kit.svelte.dev/docs/modules#sveltejs-kit-hooks) function to elegantly add them together.

We recommend putting the `catalystHandler` first, so any changes you make in your own handlers will be reflected in Catalyst.

```ts title="src/hooks.server.js"
import { sequence } from "@sveltejs/kit/hooks";

export const handle = sequence(
  catalystHandler, // as imported in the above example,
  yourOwnHandler // as defined by you.
);
```

## 3. Add the Catalyst component

As soon as possible, add the `Catalyst` component. This component will ensure navigation client-side is captured. We recommend adding this in the root `+layout.svelte`, if possible.

```svelte title="src/+layout.svelte"
<script>
  import Catalyst from '@catalyst-monitor/sveltekit/Catalyst.svelte'
</script>

<Catalyst />
<slot />
```

## 4 (Optional). Associate user info

You can associate user info with the current request context in both the client and server by calling `setUserInfo`. This will show up in the Catalyst dashboard UI associated with the request, and may help you debug.

Note that `setUserInfo` is not opinionated about the ID or username format, and will not enforce uniqueness. You can set it to whatever you want. All it does is send it to Catalyst to display.

### Server

```ts
import { Catalyst } from "@catalyst-monitor/sveltekit/server";

Catalyst.getReporter().setLoggedInUserInfo({
  loggedInId: "any-id", // Optional
  loggedInName: "any-username-name-email", // Optional
});
```

In a more realistic setting, you'd probably handle auth inside a server-side hook. You can sequence your auth hook after `catalystHandler`.

```ts title="src/hooks.server.js"
import { Catalyst } from "@catalyst-monitor/sveltekit/server";
import { sequence } from "@sveltejs/kit/hooks";

async function authHandler({ event, resolve }) {
  // Using your auth library.
  const user = await getUserInformation(event.cookies.get("sessionid"));
  event.locals.user = user;
  if (user != null) {
    Catalyst.getReporter().setLoggedInUserInfo({
      loggedInId: "any-id", // Optional
      loggedInName: "any-username-name-email", // Optional
    });
  }

  return await resolve(event);
}

export const handle = sequence(
  catalystHandler, // Make sure this is first!
  authHandler
);
```

### Client

For the client, simply change your import.

```ts
import { Catalyst } from "@catalyst-monitor/sveltekit/client";

Catalyst.getReporter().setLoggedInUserInfo({
  loggedInId: "any-id", // Optional
  loggedInName: "any-username-name-email", // Optional
});
```

In a more realistic setting, you'd likely want to listen to auth changes and set your user info accordingly.

```svelte title="src/routes/+layout.svelte

<script lang="ts">
	import { onMount } from 'svelte'
  import { getCatalystWeb } from "@catalyst-monitor/sveltekit/client";

	onMount(() => {
		const { unsubscribe } = onAuthStateChange((user) => { // onAuthStateChange provided by your auth library.
			getCatalystWeb().setUserInfo(
        user != null
        ? {
            loggedInId: user.id,
            loggedInUserName: user.name
          }
        : null)
		})
		return () => unsubscribe()
	})
</script>
```

If you run into any issues, feel free to reach out on [Discord][discord].

## Finished! Test your implementation.

You've finished setting up Catalyst! You can test your implementation by creating a component that always errors out:

```svelte title="+page.svelte"
<script>
  throw new Error('Error!')
</script>

<div>You should get an error!</div>
```

If you have any issues during set up, please reach out either [through e-mail](mailto:bill@privium.xyz) or [via Discord][discord].

[example]: https://github.com/catalyst-monitor/catalyst-examples/tree/main/js/sveltekit
[discord]: https://discord.gg/YQZy4SXzmX
