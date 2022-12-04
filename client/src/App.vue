<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';

import { computed, watch, ref } from 'vue';
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

let infoQuery = ref('')
let testQuery = ref('')

const { result } = useQuery(gql`
  query { info, test }
`)

watch(result, value => {
  if(value){
    testQuery = value.test
    infoQuery = value.info
  }
})

const info = computed(() => result.value?.info ?? 'No info')
const test = computed(() => result.value?.test ?? 'No test')

</script>

<template>
  <w-app>

    <div class="flex flex-col items-center">
      <div class="flex mx-auto space-x-5 justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
      </div>
      <HelloWorld msg="Vite + Vue" />
      <div class="flex flex-col space-y-3">
        <p class="text-blue-500 text-lg">{{ infoQuery }}</p>
        <p class="text-green-500">{{ testQuery }}</p>
        <p class="text-indigo-500 text-lg">Computed {{ info }}</p>
        <p class="text-violet-500 ">Computed {{ test }}</p>
      </div>
      <w-flex class="flex space-x-2 mt-4">
        <w-button bg-color="success">success</w-button>
        <w-button bg-color="error">error</w-button>
        <w-button bg-color="warning">warning</w-button>
        <w-button bg-color="info">info</w-button>
        <w-button>primary</w-button>
        <w-button bg-color="secondary">secondary</w-button>
        <w-button bg-color="purple-light4">purple-light4</w-button>
      </w-flex>
      <w-progress
        class="mt-5"
        circle
        color="yellow"
        bg-color="cyan"
      />
    </div>
  </w-app>
</template>
