<template>
    <div class="container">
        <div class="jumbtron">
            <todoList></todolist>
        </div>
    </div>
</template>

<script>
    import TodoList from './TodoList'

    export default {
        name: 'demoApps',
        components: {
            TodoList
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>