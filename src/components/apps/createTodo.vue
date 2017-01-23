<template>
    <div id="get-todo" class="jumbotron">
        <input class="form-control" v-model="newtodo" placeholder="I need to..."> <!--@change="getTodo"-->
        <button class="btn btn-primary" v-on:click="addTodo">Add Todo</button>
    </div>
</template>
<script>
    export default {
        name: 'createTodo',
        data() {
            return {
                newtodo: ""
            }
        },
        methods: {
            addTodo() {
                this.$store.dispatch('addTodo', this.newtodo);
                this.newtodo = "";
            }
        }
    }
</script>