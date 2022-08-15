<template>
  <router-view></router-view>
</template>
<script>
export default {
  name: 'app',
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#body {
    display: flex;
    flex-direction: column;
    background-color: rgb(240, 240, 240);
}
</style>
