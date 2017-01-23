<template>
    <div class="container">
        
      <todoList></todolist>
      <users></users>
      <issues></issues>

    </div>
</template>

<script>
    import TodoList from './apps/TodoList'
    import Users from './apps/Users'
    import Issues from './apps/Issues'

    export default {
        name: 'demoApps',
        components: {
            TodoList,
            Users,
            Issues
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>