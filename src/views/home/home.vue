<script setup>
import { defineComponent, defineAsyncComponent, computed} from 'vue'
import store from '@/store'

const AppTopbar = defineAsyncComponent(() => import(/* webpackChunkName: "components_app-topbar" */
  '@/components/app-topbar.vue'))

const AppModalUpdate = defineAsyncComponent(() => import(/* webpackChunkName: "components_app-modal-update" */
  '@/components/app-modal-update.vue'))

defineComponent({
  name: 'Home',
  components: { AppTopbar, AppModalUpdate }
})

 const isProfileSetup = computed(() => {
   return store.state.user.displayName
 })

</script>

<template>
  <AppModalUpdate v-if="!isProfileSetup" />
  <main v-else>
    <div class="appTopbar-container">
      <AppTopbar />
    </div>
    <router-view />
  </main>
</template>
