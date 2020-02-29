<template>
  <div id="app">
    <v-header></v-header>
    <ul class="share-list">
      <li><router-link to="my">我的</router-link></li>
      <li><router-link to="user">用户</router-link></li>
      <li><router-link to="pinglun">A评论</router-link></li>
      <li><router-link to="pinglun">B评论</router-link></li>
      <li><router-link to="pinglun">C评论</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    "v-header": Header
  }
};
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  bottom: 0px;
}
.share-list {
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  padding: 2px 16px;
  font-size: 14px;
  list-style-type: none;
}
</style>
