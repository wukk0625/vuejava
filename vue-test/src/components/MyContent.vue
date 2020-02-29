<template>
  <div class="MyContent">
    Content
  </div>
</template>

<script>
export default {
  name: "MyContent",
  data() {
    return {
      msg: "MyContent123"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.MyContent {
  margin: 0;
  color: black;
  width: 100%;
  height: 10%;
  background-color: #ffcb04;
}
</style>
