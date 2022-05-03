<script setup>
import { defineComponent, ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth'
import router from '@/router'
import store from '@/store'

defineComponent({
  name: 'Login'
})

const email = ref('')
const password = ref('')
const remembered = ref('')

function signin () {
  // TODO remembered function
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      store.commit('setUser', data.user)
      router.push({ name: 'home' })
    })
    .catch((error) => {
      console.error('Append error', error)
    })
}
</script>

<template>
  <main class="form-signin">
    <form onsubmit="event.preventDefault();">
      <!-- <img class="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
      <h1 class="h3 mb-3 fw-normal">Connexion</h1>

      <div class="form-floating">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="email">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control mb-0" id="floatingPassword" placeholder="Password" v-model="password">
        <label for="floatingPassword">Password</label>
      </div>
      <div class="checkbox mb-3 mt-2">
        <label>
          <input type="checkbox" value="remember-me" disabled v-model="remembered"> Se rappeler de moi
        </label>
      </div>
      <p>Pas de compte ? <router-link to="/register" tag="a">En creer un.</router-link></p>
      <button class="w-100 btn btn-lg btn-primary" type="submit" @click="signin">Se connecter</button>
      <p class="mt-5 text-muted">&copy; 2022–2023</p>
      <p class="text-muted">Euphoria</p>
    </form>
  </main>
</template>
