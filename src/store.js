import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            app: true
        }
    }
})

export default store