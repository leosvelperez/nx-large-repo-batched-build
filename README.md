# NxLargeRepo

This project features a large Nx MonoRepo with a custom batch executor for building Angular libraries, allowing to do incremental builds.

It was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Extensible Build Framework**

## Workspace structure

This workspace contains 2 Angular applications:

- `app0`: configured to use incremental builds with a batch executor for the dependent libraries.
- `app1`: configured without incremental builds.

Both apps are setup in identical ways, the both have 80+ libraries and ~16k components. The difference is `app0` will be built using custom executors optimized for incremental builds and `app1` will be built using the normal Angular DevKit executor for building apps.

## Build apps

To use the batch executor, first build the `ng-build` library which contains the executor used by `app0` dependent libraries:

```bash
nx build ng-build
```

### app0

```bash
NX_BATCH_MODE=true nx build app0
```

### app1

```bash
nx build app1
```

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
