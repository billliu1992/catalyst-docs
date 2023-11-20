---
sidebar_position: 1
---

# Manually Recording Events

By default, `installNodeBase` and `installWebBase` will send messages from `console` to Catalyst.

However, once you've initialized the library, you can also manually log events in Catalyst in the following manner:

```ts title="Web"
import { getCatalystWeb } from '@catalyst-monitor/core'

// installWebBase MUST be called beforehand!

getCatalystWeb().recordLog(
    'log',
    'This is my message', // Can also be an instance of Error
    { test: true } // Additional arguments to pass.
)
```

```ts title="Node.js"
import { getCatalystNode } from '@catalyst-monitor/core'

// installNodeBase MUST be called beforehand!

getCatalystNode().recordLog(
    'log',
    'This is my message', // Can also be an instance of Error
    { test: true } // Additional arguments to pass.
)
```