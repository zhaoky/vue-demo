<template>
  <div id="child">
    <div>Child组件</div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("Child beforeCreate");
  },
  created() {
    console.log("Child created");
  },
  beforeMount() {
    console.log("Child beforeMount");
  },
  mounted() {
    console.log("Child mounted");
  },
  beforeDestroy() {
    console.log("Child beforeDestroy");
  },
  destroyed() {
    console.log("Child destroyed");
  }
};
</script>
