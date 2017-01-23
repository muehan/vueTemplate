import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        todos: [],
        newTodo: ''
    },
    mutations: {
        GET_TODO(state, todo) {
            state.newTodo = todo
        },
        ADD_TODO(state) {
            state.todos.push({
                text: state.newTodo
            })
        },
        CLEAR_TODO(state) {
            state.newTodo = ''
        }
    },
    actions: {
        getTodo({ commit }, todo) {
            commit('GET_TODO', todo)
        },
        addTodo({ commit }) {
            commit('ADD_TODO')
        },
        clearTodo({ commit }) {
            commit('CLEAR_TODO')
        }
        // also possible
        // addTodo = function(store){
        // var commit = store.commit
        // commit('ADD_TODO')
        // }
    },
    getters: {
        newTodo: state => state.newTodo,
        todos: state => state.todos
    }
})