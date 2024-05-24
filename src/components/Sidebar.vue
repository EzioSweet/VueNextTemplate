<template>
     <a-layout-sider theme="light" v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
        <a-menu-item  key="/">
          <router-link to="/">
            <home-outlined />
            <span>Home</span>
          </router-link>
        </a-menu-item>
        <a-menu-item  key="/overview">
          <router-link to="/overview">
            <desktop-outlined />
            <span>Overview</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/plot">
            <box-plot-outlined />
            <span>Plot</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link to="/form">
            <form-outlined />
            <span>Form</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
  </template>
<script lang="ts" setup>
import {
  BoxPlotOutlined,
  FormOutlined,
  HomeOutlined,
  DesktopOutlined,
} from '@ant-design/icons-vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['1']);
</script>
<style scoped>
.sidebar {
    width: 256px;
    height: 100vh;
}
</style>