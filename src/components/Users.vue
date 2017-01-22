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
                filterText: '*'
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
                if (!users) {
                    return;
                }

                if (filter === "*") {
                    return users;
                }

                return users.filter(function(user) {
                    console.log('filtertext' + filter);
                    if (user.name.includes(filter)) {
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