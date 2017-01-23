<template>
     <div class="jumbotron">
        <h2>Issues</h2>
        <p><b>total:</b> {{totalIssues}}</p>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>key</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="issue in issues">
                    <td>{{issue.key}}</td>
                    <td>{{issue.fields.summary}}</td>
                </tr>
            </tbody>
        </table>
        
     </div>
</template>

<script>
    import Vue from 'vue';
    import Resource from 'vue-resource';

    import * as config from './../../config'

    Vue.use(Resource);

    export default {
        name: 'issues',
        http: {
            root: config.JIRA_BASE_URL,
            headers: {
                Authorization: "Basic sometocken"
            }
        },
        data() {
            return {
                searchResponse: this.loadIssues(),
                issues: "",
                totalIssues: 0
            }
        },
        methods: {
            loadIssues: function() {
                this.$http.get('search?jql=somejqlquery').then(response => {
                    this.issues = response.body.issues;
                    this.totalIssues = response.body.total;
                    return response.body;
                }, (response) => {
                    alert("Error");
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>