<template>
  <div id="bpp">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "异步Bpp组件"
    };
  },
  beforeCreate() {
    console.log("async Bpp beforeCreate");
  },
  created() {
    console.log("async Bpp created");
  },
  beforeMount() {
    console.log("async Bpp beforeMount");
  },
  mounted() {
    console.log("async Bpp mounted");
  },
  beforeDestroy() {
    console.log("async Bpp beforeDestroy");
  },
  destroyed() {
    console.log("async Bpp destroyed");
  }
};
</script>
