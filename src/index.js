import Vue from 'vue';
import App from './app.vue';
new Vue({
  el: '#main',
  components: {
    App,
    Bpp: () => import('./bpp.vue')
  },
  data: {
    info: { name: 'korey', age: 28 },
    isShow: true,
  },
  computed: {
    compute() {
      return this.info.age + 1;
    }
  },
  methods: {
    plus() {
      this.info.age++;
    },
    hide() {
      this.isShow = false;
    }
  },
  watch: {
    info: {
      handler(val, oldVal) {
        console.log('变量info变化了：', val, oldVal);
      },
      deep: true
    }
  },
  beforeCreate() {
    console.log(`vue beforeCreate`);
  },
  created() {
    console.log(`vue created`);
  },
  beforeMount() {
    console.log(`vue beforeMount`);
  },
  mounted() {
    console.log(`vue mounted`);
  },
  beforeUpdate() {
    console.log('vue beforeUpdate');
  },
  updated() {
    console.log('vue updated');
  }
});
