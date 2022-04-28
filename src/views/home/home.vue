<script setup>
import { defineComponent, defineAsyncComponent } from 'vue'

const AppTopbar = defineAsyncComponent(() => import(/* webpackChunkName: "components_app-topbar" */
  '@/components/app-topbar.vue'))

defineComponent({
  name: 'Home',
  components: { AppTopbar }
})
</script>

<template>
  <main>
    <div class="appTopbar-container">
      <AppTopbar />
    </div>
    <h1>Maganache</h1>
  </main>
</template>