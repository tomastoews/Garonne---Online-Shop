<template>
  <div id="app">
    <Navbar class="d-flex d-xl-none"/>
    <div class="row">
      <sidebar class="d-none d-xl-block"/>
      <div class="pages">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default {
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style lang="scss"> 
  body, html, #app, .row, .pages {
    height: 100%;
  }
  .row { margin: 0!important; }
  body, html {
    top: 0;
    bottom: 0;
  }
  .pages {
    margin-left: 480px;
    width: 100%;
    min-height: 800px;
  }
  @media (max-width: 1200px) {
    .pages {
      margin-left: 0;
    }
  }
</style>
