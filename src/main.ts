import { createApp } from 'vue'
import App from './App.vue'
import {createI18n} from "vue-i18n";
import messages from '@intlify/vite-plugin-vue-i18n/messages'

createApp(App).use(createI18n({
  messages,
  locale: 'en',
})).mount('#app')
