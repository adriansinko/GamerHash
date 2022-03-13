<template>
  <Header />
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import Header from "@/layout/header/Header";

export default defineComponent({
  name: "Layout",
  components: {
    Header,
  },
});
</script>
