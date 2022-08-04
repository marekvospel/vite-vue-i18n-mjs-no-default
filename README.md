## Reproduction
1. install dependencies (`pnpm i`)

2. run vite dev server or build ()

### Expected result
vite configuration should be loaded and dev server / build should start

### Actual result
vite configuration fails to load due to the following error
```
failed to load config from /vite-vue-i18n-mjs-no-default/vite.config.ts
error during build:
file:///vite-vue-i18n-mjs-no-default/vite.config.ts.timestamp-1659644481699.mjs:4
import I18n from "@intlify/vite-plugin-vue-i18n";
       ^^^^
SyntaxError: The requested module '@intlify/vite-plugin-vue-i18n' does not provide an export named 'default'
    at ModuleJob._instantiate (node:internal/modules/esm/module_job:123:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:189:5)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:541:24)
    at async loadConfigFromBundledFile (file:///vite-vue-i18n-mjs-no-default/node_modules/.pnpm/vite@3.0.4/node_modules/vite/dist/node/chunks/dep-71eb12cb.js:62893:21)
    at async loadConfigFromFile (file:///vite-vue-i18n-mjs-no-default/node_modules/.pnpm/vite@3.0.4/node_modules/vite/dist/node/chunks/dep-71eb12cb.js:62780:28)
    at async resolveConfig (file:///vite-vue-i18n-mjs-no-default/node_modules/.pnpm/vite@3.0.4/node_modules/vite/dist/node/chunks/dep-71eb12cb.js:62398:28)
    at async doBuild (file:///vite-vue-i18n-mjs-no-default/node_modules/.pnpm/vite@3.0.4/node_modules/vite/dist/node/chunks/dep-71eb12cb.js:43358:20)
    at async build (file:///vite-vue-i18n-mjs-no-default/node_modules/.pnpm/vite@3.0.4/node_modules/vite/dist/node/chunks/dep-71eb12cb.js:43347:16)
    at async CAC.<anonymous> (file:///vite-vue-i18n-mjs-no-default/node_modules/.pnpm/vite@3.0.4/node_modules/vite/dist/node/cli.js:747:9)
 ELIFECYCLE  Command failed with exit code 1.
```
