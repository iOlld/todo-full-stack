<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
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
      <w-progress
        class="ma1"
        circle
        color="yellow"
        bg-color="cyan">
      </w-progress>
    </div>
  </w-app>
</template>
