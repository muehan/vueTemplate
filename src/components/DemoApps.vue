<template>
    <div class="container">
        <createTodo></createTodo>
        <CurrentTodos></CurrentTodos>
        <latestTodo></latesttodo>
        <todoList></todolist>
        <users></users>
        <issues></issues>
    </div>
</template>

<script>
    import TodoList from './apps/TodoList'
    import Users from './apps/Users'
    import Issues from './apps/Issues'
    import createTodo from './apps/createTodo'
    import CurrentTodos from './apps/CurrentTodos'
    import latestTodo from './apps/latestTodo'

    export default {
        name: 'demoApps',
        components: {
            TodoList,
            Users,
            Issues,
            createTodo,
            CurrentTodos,
            latestTodo
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>