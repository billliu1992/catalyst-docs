---
sidebar_position: 2
---

# Manually Instrumenting Navigation on Web

:::note
Please check if we provide a package for your choice of navigation framework, before manually instrumenting!
:::

Being able to breakdown your errors and logs by page can greatly speed up your triage and debugging processes.

An example of a working implementation can be found [here](https://github.com/billliu1992/codebase-doctor-js/blob/main/packages/react-router/src/Catalyst.tsx).

In order for Catalyst to associate logs and errors to the page the user is currently on, you'll need to let Catalyst know when the user changes page. You can do so by calling `getCatalystWeb().recordPageView(...)`.

```ts
import { getCatalystWeb } from '@catalyst-monitor/core'

getCatalystWeb().recordPageView('/', {})
```

`recordPageView` takes a path pattern, and the path params associated with the pattern. Catalyst is not opinionated on the format of the path pattern.

```ts
getCatalystWeb().recordPageView('/widgets/:widgetId', { widgetId: string })

getCatalystWeb().recordPageView('/widgets/{widgetId}', { widgetId: string })
```

For best results, always pass in the path pattern and param separately. This will give you an aggregate view of logs and errors per path pattern, while still letting you drill down on individual visits.