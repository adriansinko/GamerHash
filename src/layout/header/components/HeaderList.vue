<template>
  <!--begin::List-->
  <ul class="header__list">
    <slot></slot>
  </ul>
  <!--end::List-->
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderList",
});
</script>
