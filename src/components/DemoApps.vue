<template>
    <div class="container">
        <div class="jumbotron">
            <h2>Todo List Demo</h2>
            <todoList></todolist>
        </div>

        <div class="jumbotron">
            <h2>Json API Demo</h2>
            <users></users>
        </div>
    </div>
</template>

<script>
    import TodoList from './TodoList'
    import Users from './Users'

    export default {
        name: 'demoApps',
        components: {
            TodoList,
            Users
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>