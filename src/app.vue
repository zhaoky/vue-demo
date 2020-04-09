<template>
  <div id="app">
    <div>{{num ? `num:${num}`:``}}</div>
    <Child class="example"></Child>
  </div>
</template>

<script>
import Child from "./child.vue";
export default {
  name: "app",
  components: {
    Child
  },
  props: {
    num: Number,
    name: String
  },
  beforeCreate() {
    console.log(`App beforeCreate`);
  },
  created() {
    console.log(`App ${this.name} created`);
  },
  beforeMount() {
    console.log(`App ${this.name} beforeMount`);
  },
  mounted() {
    console.log(`App ${this.name} mounted`);
  },
  beforeUpdate() {
    console.log(`App ${this.name} beforeUpdate`);
  },
  updated() {
    console.log(`App ${this.name} updated`);
  },
  beforeDestroy() {
    console.log(`App ${this.name} beforeDestroy`);
  },
  destroyed() {
    console.log(`App ${this.name} destroyed`);
  }
};
</script>

<style>
.example {
  color: red;
}
</style>
