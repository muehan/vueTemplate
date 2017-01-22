<template>
  <div id="app">
    <navigation></navigation>
    <demoApps></demoApps>
  </div>
</template>

<script>
    import Navigation from './components/Navigation'
    import DemoApps from './components/DemoApps'

    export default {
        name: 'app',
        components: {
            Navigation,
            DemoApps
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>