<script setup>
import { defineComponent, computed } from 'vue'
import { getAuth, signOut } from 'firebase/auth'
import store from '@/store'
import router from '@/router'

defineComponent({
  name: 'AppTopbar'
 })

 const userData = computed(() => {
   return store.state.user
 })

function signout () {
  const auth = getAuth()
  signOut(auth).then(() => {
    console.log('dc')
  })
  .catch((error) => {
    console.error('Error append', error)
  })
  store.commit('removeUser')
  router.push({ name: 'login' })
  console.log('prout')
}
</script>

<template>
    <header class="py-3 mb-3 border-bottom">
    <div class="container-fluid d-grid gap-3 align-items-center" style="grid-template-columns: 1fr 2fr;">
      <div class="dropdown">
        <a href="#" class="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle" id="dropdownNavLink" data-bs-toggle="dropdown" aria-expanded="false">
          <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        </a>
        <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownNavLink">
          <li><a class="dropdown-item active" href="#" aria-current="page">Overview</a></li>
          <li><a class="dropdown-item" href="#">Inventory</a></li>
          <li><a class="dropdown-item" href="#">Customers</a></li>
          <li><a class="dropdown-item" href="#">Products</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Reports</a></li>
          <li><a class="dropdown-item" href="#">Analytics</a></li>
        </ul>
      </div>

      <div class="d-flex align-items-center">
        <form class="w-100 me-3">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
        </form>

        <div class="flex-shrink-0 dropdown">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
            <img :src="userData.photoURL" :alt="userData.displayName" width="32" height="32" class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2" style="">
            <li><a class="dropdown-item" href="#">Nouvel article</a></li>
            <li><router-link to="/home/profile" tag="a" class="dropdown-item">Profile</router-link></li>
            <li><a class="dropdown-item" href="#">Parametres</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" @click="signout">Se deconnecter</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
