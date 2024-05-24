<template>
  <a-layout style="min-height: 100vh" has-sider>
   <Sidebar />
    <a-layout style="max-height:100vh;overflow: auto;">
      <a-layout-content style="margin: 30px 16px 0 16px">
          <RouterView/>
      </a-layout-content>
      <Footer/>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import Sidebar from './components/Sidebar.vue';
import Footer from './components/Footer.vue';
</script>