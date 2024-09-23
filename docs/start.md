---
sidebar_position: 1
slug: /
---

# Welcome to Catalyst

Thanks for checking out Catalyst!

Catalyst is the fastest way to get reliability metrics, dashboards, and alerting. Within a few minutes, a single developer can set up a monitoring stack that a dedicated ops/SRE team would take months to build and perfect.

If you need to get world-class reliability but don't want to invest a lot of resources, Catalyst is perfect for you.

## What's the drawback?

Catalyst gets you there faster by making some reasonable assumptions about how you code. Catalyst works best if you follow the following practices:

1. You throw errors instead of swallow them.
1. You follow semantics for logs and error codes e.g. throw 404 when not found
1. (On the server) Your logic is broken up by endpoints/gRPC methods
1. (On the client) You push to the history state.
1. You don't want to do a lot of manual instrumentation

## What can Catalyst do?

Catalyst is a generalist monitoring tool that can do a bit of everything. It can:

- Capture logs and errors on both servers and clients
- Capture user actions on clients
- Capturing auth info
- Capturing server durations
- Track sessions end-to-end
- Capture error rate, grouped by pages, and backend requests

If you follow these practices, you'll find Catalyst to be a drop-in reliability tool that requires little-to-no configuration to get started!

## Catalyst is under development!

We are still adding support for libraries and frameworks. If your library and or framework isn't supported, feel free to reach out either [through e-mail](mailto:bill@privium.xyz) or [via Discord](https://discord.gg/YQZy4SXzmX).
