<template>
  <div id="app">
    <Header/>
    <div id="main">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>
<script>
  import Header from 'cp/Header.vue';
  import Footer from 'cp/Footer.vue';
  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  }
</script>
<style>
  html, body, #app {
      height: 100%;
  }

  #app {
      display: flex;
      flex-direction: column;
      min-width: 800px;
  }

  #main {
      flex-grow: 1;
      background: #eee;
  }

  #main>div {
      margin: 0 auto;
      width: 768px;
  }
</style>
