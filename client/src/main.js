import { createApp } from 'vue'

import App from './App.vue'

import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'

import './assets/scss/index.scss'

const app = createApp(App)

new WaveUI(app, {
  // Some Wave UI options.
})

app.mount('#app')
