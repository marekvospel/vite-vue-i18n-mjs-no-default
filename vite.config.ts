import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import I18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    I18n({
      include: 'locale/**'
    })
  ]
})
