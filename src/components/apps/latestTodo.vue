<template>
    <div id="get-todo" class="jumbotron">
        <h3>latest todo:</h3>
        <p :value="newTodo" @change="getTodo"></p>
    </div>
</template>
<script>
    export default {
        name: 'latestTodo',
        methods: {
            getTodo(e) {
                this.$store.dispatch('addTodo', e.target.value);
            }
        },
        computed: {
            newTodo() {
                return this.$store.getters.newTodo;
            }
        }
    }
</script>