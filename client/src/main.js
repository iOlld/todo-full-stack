import { createApp, provide, h } from 'vue'
import { createPinia } from 'pinia'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

import App from './App.vue'


import './assets/scss/index.scss'
import WaveUI from 'wave-ui/src/wave-ui'
// import 'wave-ui/dist/wave-ui.css'

// import './assets/scss/index.scss'

const pinia = createPinia()

const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: import.meta.env.VITE_BACKEND_URL,
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
}).use(pinia)

new WaveUI(app, {
  // Some Wave UI options.
})

app.mount('#app')
