<script setup>
import { defineComponent, ref, computed } from 'vue'
import store from '@/store'

defineComponent({
  name: 'Profile'
})

 const userData = computed(() => {
     return store.state.user
 })

</script>

<template>
    <main>
        Hello {{ userData.displayName }}
        your email is {{ userData.email }}
    </main>
</template>
