<div align="center" width="100%">
    <img src="./turbobun-logo.png" width="100%" alt="" />
</div>
# turbobun

This project template it's a starter boilerplate for a Bun + Biome [Turborepo](https://turbo.build/), featuring basic [Elysia](https://elysiajs.com/) and [Next.js](https://nextjs.org/) apps.
It enforce commits conventions with linters and hooks.

## Dev Features

- [Bun](https://bun.sh/) - node, pnpm and vite alternative
- [Biome](https://biomejs.dev/) - prettier alternative
- [Renovate](https://github.com/renovatebot/renovate) - Dependency updater
- [degit](https://github.com/Rich-Harris/degit) - project scaffolding
- [commitizen](https://commitizen.github.io/cz-cli/) - commit conventions
- [cz-git](https://github.com/Zhengqbbb/cz-git) - commitizen adapter with emoji
- [release-please](https://github.com/googleapis/release-please) with [release-please-action](https://github.com/googleapis/release-please-action) GitHub Workflow to handle PRs
- [lefthook](https://github.com/evilmartians/lefthook) - Git hooks manager that handles
  - **Biome** on staged files
  - [commitlint](https://commitlint.js.org/) - Lint commit messages
  - [sort-package-json](https://github.com/keithamus/sort-package-json) - sort package.json
  - [case-police](https://github.com/antfu/case-police) - 🚨 Make the case correct, PLEASE!
  - [knip](https://knip.dev/) - (not implemented) Cut the clutter from TypeScript projects

## Getting started

```sh
bunx degit mugencraft/turbobun my-app
cd my-app
bun install
```

To run:

```sh
bun dev
```

## Available Scripts

```sh
# Develop
bun dev
# Build
bun build
# Clean node_modules
bun clean
# Check (Biome)
bun check
# Write Check Fix (Biome)
bun check:fix
# Check Format (Biome)
bun format
# Write Format Fix (Biome)
bun format:fix
# Lint (Turbo)
bun lint
# Check Lint (Biome)
bun lint:biome
# Type Check (Turbo)
bun typecheck
# Type Check (tsc)
bun typecheck:tsc
# Knip
bun knip
# Test (turbo)
bun test
```

## Bun Monorepo Setup

Bun has native monorepo capabilities.

### Packages Dependencies

To reference packages use the [`workspace:*`](https://bun.sh/docs/install/workspaces) key:

```json
{
  "name": "pkg-a",
  "dependencies": {
    "pkg-b": "workspace:*"
  }
}
```

### Run Multiple Actions

Using [--filter](https://bun.sh/docs/cli/filter), you can run the dev script in all packages in parallel:

- `bun --filter '*' dev`
- `bun --filter './apps/**' dev`
- `bun --filter './packages/**'`
- `bun --filter './packages/foo'`

### Bun CLI Docs

- [bunx](https://bun.sh/docs/cli/bunx)
- [bun run](https://bun.sh/docs/cli/run)
- [bun install](https://bun.sh/docs/cli/install)
  - [bun add](https://bun.sh/docs/cli/add)
  - [bun remove](https://bun.sh/docs/cli/remove)
  - [bun outdated](https://bun.sh/docs/cli/outdated)
  - [bun update](https://bun.sh/docs/cli/update)

## Inspired By

- [u1aryz/bun-biome-template](https://github.com/u1aryz/bun-biome-template)
- [codiplace/bun-monorepo](https://github.com/codiplace/bun-monorepo)

## License

[MIT License](LICENSE)
