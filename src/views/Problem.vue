<template>
  <div class="container">
    <router-view :key="$route.path"></router-view>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Problem",
});
</script>
<style scoped>
.container {
  border: 3px solid black;
  border-radius: 5px;
  padding: 3em;
}
</style>
