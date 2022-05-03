<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'App'
})
</script>

<template>
  <router-view v-slot="{ Component }">
    <!-- <transition name="fade" mode="out-in"> -->
      <component :is="Component" />
    <!-- </transition> -->
  </router-view>
</template>
