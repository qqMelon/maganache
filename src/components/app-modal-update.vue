<script setup>
import { defineComponent, ref } from 'vue'
import { getAuth, updateProfile } from 'firebase/auth'
import store from '@/store'

defineComponent({
    name: 'AppModalUpdate'
})

const userDisplayName = ref('')
let errorInput = false

function updateDisplayName () {
    const auth = getAuth()
    if (userDisplayName !== '') {
        updateProfile(auth.currentUser, { displayName: userDisplayName.value })
            .then(() => {
            console.log('Success update')
        })
        .catch((error) => {
            console.error('Error during update')
        })
    } else {
    console.error('Empty input')
    errorInput = true
    }
}
</script>

<template>
   <div class="modal modal-signin position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSignin">
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-5 shadow">
      <div class="modal-header p-5 pb-4 border-bottom-0">
        <h2 class="fw-bold mb-0">Mettez a jour votre profil</h2>
      </div>

      <div class="modal-body p-5 pt-0">
        <form class="" onsubmit="event.preventDefault();">
          <div class="form-floating mb-3">
            <input type="text" class="form-control rounded-4" id="floatingInput" placeholder="John Doe" v-model="userDisplayName">
            <label for="floatingInput">Pseudonyme</label>
            <div id="floatingInputFeedback" class="invalid-feedback">
                Une erreur sur la saisi de vos information
            </div>
          </div>
         <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" @click="updateDisplayName" type="submit">Mettre a jour</button>
          <small class="text-muted">Un pseudonyme permettra d'identifier votre interaction dans notre application.</small>
        </form>
      </div>
    </div>
  </div>
   </div>
</template>
