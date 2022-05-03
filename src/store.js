import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            app: true,
            user: null
        }
    },
    actions: {
        saveUserInLocalStorage: function () {},
        saveTokenInLocalStorage: function () {}  
    },
    mutations: {
        setUser: function (state, payload) {
            state.user = payload
        },
        removeUser: function (state) {
            state.user = null
        }
    }
})

export default store
