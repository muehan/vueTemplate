<template>
     <div>
         <input type="text" id="inputSearch" class="form-control" v-model="filterText">
         <table class="table">
             <tr>
                 <th>Id</th>
                 <th>Name</th>
                 <th>Username</th>
                 <th>EMail</th>
             </tr>
             <tr v-for="user in filteredUsers(allUsers, filterText)">
                 <td>{{user.id}}</td>
                 <td>{{user.name}}</td>
                 <td>{{user.username}}</td>
                 <td>{{user.email}}</td>
             </tr>
         </table>
     </div>
</template>

<script>
    import Vue from 'vue';
    import Resource from 'vue-resource';

    Vue.use(Resource);

    export default {
        name: 'users',
        data() {
            return {
                allUsers: this.loadUsers(),
                filterText: ''
            }
        },
        methods: {
            loadUsers: function() {
                console.log('load all the users');
                this.$http.get('https://jsonplaceholder.typicode.com/users').then(respone => {
                    this.allUsers = respone.body;
                }, (respone) => {
                    alert("Error");
                });
            },
            filteredUsers: function(users, filter) {

                // ignore first call
                if (!users) {
                    return;
                }

                if (filter === "*" || filter === "") {
                    return users;
                }

                // hopefully there is a better way?
                return users.filter(function(user) {
                    if (user.id == filter ||
                        user.name.toLowerCase().includes(filter.toLowerCase()) ||
                        user.username.toLowerCase().includes(filter.toLowerCase()) ||
                        user.email.toLowerCase().includes(filter.toLowerCase())) {
                        return user;
                    }
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #inputSearch {
        margin-bottom: 10px;
    }
</style>