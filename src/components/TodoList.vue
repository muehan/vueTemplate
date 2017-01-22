<template>
     <div>
         <form id="todoForm" class="form-inline margin-bottom">
            <div class="group-group">
                <input type="text" name="" v-model="todo" id="input1/(\w+)/\u\1/g" class="form-control" value="" required="required" pattern="" title="">
                <button type="button" class="btn btn-primary" v-on:click="addTodo">button</button>
            </div>
         </form>
        <ul>
            <li v-for="item in items">{{item.text}}</li>
        </ul>
     </div>
</template>

<script>
    export default {
        name: 'todoList',
        data() {
            return {
                todo: "",
                items: [{
                    text: "learn more vue"
                }, {
                    text: "understand webpack"
                }, {
                    text: "write more components"
                }]
            }
        },
        methods: {
            addTodo: function() {
                if (this.todo) {
                    this.items.push({
                        text: this.todo
                    });
                    this.todo = "";
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #todoForm {
        margin-bottom: 10px;
    }
</style>