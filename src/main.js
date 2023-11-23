import './assets/zero.css'
import './assets/cores.css'
import './assets/fonts.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'

import { Bootstrap4Pagination } from 'laravel-vue-pagination';
import { Bootstrap5Pagination } from 'laravel-vue-pagination';
import { TailwindPagination } from 'laravel-vue-pagination';

const vuetify = createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa
    }
  },
  components,
  directives
})


const app = createApp(App)

app.component(Bootstrap4Pagination)
app.component(Bootstrap5Pagination)
app.component(TailwindPagination)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
