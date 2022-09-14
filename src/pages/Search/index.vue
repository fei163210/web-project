<template>
  <div>
    <h1>param参数 {{ $route.params.message }}</h1>
    <h1>props接收{{ message }}</h1>
  </div>
</template>
<script>
export default {
  props: ["message"],
};
</script>
<style lang="">
</style>