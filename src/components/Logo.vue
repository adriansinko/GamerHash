<template>
  <!--begin::Link-Logo-->
  <a href="https://gamerhash.com" class="logo">
    <!--begin::Image-->
    <img class="logo__img" :src="getLogo()" alt="Logo" />
    <!--end::Image-->
  </a>
  <!--end::Link-Logo-->
</template>

<script>
import { defineComponent } from "vue";
import { getLogo } from "@/core/helpers/assets";

export default defineComponent({
  name: "Logo",
  setup() {
    return {
      getLogo,
    };
  },
});
</script>
