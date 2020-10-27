<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <div ref="target" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Footer from "svelte-to-x";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mounted() {
    new Footer({
      target: this.$refs.target,
      props: {
        name: "world",
      },
    });
  },
};
</script>
