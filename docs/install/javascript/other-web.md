---
sidebar_position: 5
---

# Other Web Frameworks

:::note
Before manually instrumenting, please check if we provide a package for your choice of framework! If we don't provide a package, we'd
still like to work with you. Please reach out either [through e-mail](mailto:bill@privium.xyz) or [via Discord](https://discord.gg/YQZy4SXzmX).
:::

For a working example, please checkout our [examples repo](https://github.com/catalyst-monitor/catalyst-examples).

## Add the dependency

To get started, add the core Javascript library to your client:

```bash title="Terminal"
npm install @catalyst-monitor/web@^0.1.1

# Alternatively, if you use Yarn:
yarn add @catalyst-monitor/web@^0.1.1
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

## Manually Instrumenting

Being able to breakdown your errors and logs by page can greatly speed up your triage and debugging processes.

An example of how we instrument Catalyst for React Router can be found [here](https://github.com/catalyst-monitor/catalyst-js/blob/main/packages/react-router/src/Catalyst.tsx).

In order for Catalyst to associate logs and errors to the page the user is currently on, you'll need to let Catalyst know when the user changes page by calling `getCatalystWeb().recordPageView(...)`.

```ts
import Catalyst from "@catalyst-monitor/web";

CatalystWeb.getReporter().recordPageView({
  // The fully built path (as it appears in the address bar).
  rawPath: "/todo/abc123",

  // The pattern used to match the raw path with the route.
  // The format does not matter, it could be /todo/:todoId for example.
  pathPattern: "/todo/{todoId}",

  // The arguments from the path.
  args: { todoId: "abc123" },
});
```

Note that `recordPageView` is stateful. Once it's called, any subsequent actions (like logs, fetches) will be associated with this page view.

## (Optional) Associating User Info

You can associate user info with the current page view and session with `setUserInfo`. This will show up in the Catalyst dashboard UI, and may help you debug.

`setUserInfo` is stateful, and any subsequently recorded event will carry the user info. Therefore, the best place to do this is to any auth listeners.

Note that `setUserInfo` is not opinionated about the ID or username format, and will not enforce uniqueness. You can set it to whatever you want. All it does is send it to Catalyst to display.

```ts
import Catalyst from "@catalyst-monitor/web";

CatalystWeb.getReporter().setUserInfo({
  loggedInId: user.id, // Any string ID
  loggedInName: user.name, // A username, e-mail, etc...
});

getCatalystWeb().setUserInfo(null); // Logged out.
```
