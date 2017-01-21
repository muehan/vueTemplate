<template>
     
     <ul>
         <li>{{text}}</li>
     </ul>

</template>

<script>
    export default {
        name: 'todoList',
        data() {
            return {
                text: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>