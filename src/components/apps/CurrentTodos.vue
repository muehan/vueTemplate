<template>
    <div id="current-todos" class="jumbotron">
        <h2>All my todos</h2>
        <h3 v-if="todos.length > 0">Current({{todos.length}})</h3>
        <ul class="list-group">
            <li v-for="todo in todos">
                {{todo.text}}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'currenttodos',
        computed: {
            todos() {
                return this.$store.getters.todos
            }
        }
    }
</script>
<style>

</style>