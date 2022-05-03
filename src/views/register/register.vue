<script setup>
import { defineComponent, ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import router from '@/router'
import store from '@/store'

defineComponent({
    name: 'Register'
})

const email = ref('')
const password = ref('')
const passwordControl = ref('')

function register() {
    if (password.value === passwordControl.value) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                store.commit('setUser', userCredential)
                router.push({ name: 'home' })
            })
            .catch((error) => {
                console.error('Error append', error)
            })
    }
}
</script>

<template>
    <main class="form-signin">
        <form onsubmit="event.preventDefault();">
            <!-- <img class="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
            <h1 class="h3 mb-3 fw-normal">Creer un compte</h1>

            <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="email">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password">
                <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPasswordControl"
                    placeholder="Password confirmation" v-model="passwordControl">
                <label for="floatingPasswordControl">Password confirmation</label>
            </div>
            <p>Deja un compte ? <router-link to="/login" tag="a">Se connecter.</router-link>
            </p>
            <button class="w-100 btn btn-lg btn-primary" type="submit" @click="register">S'enregister</button>
            <p class="mt-5 text-muted">&copy; 2022–2023</p>
            <p class="text-muted">Euphoria</p>
        </form>
    </main>
</template>