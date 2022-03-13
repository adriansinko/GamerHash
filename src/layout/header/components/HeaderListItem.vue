<template>
  <!--begin::Item-->
  <li class="header__item">
    <!--begin::Link-->
    <a class="header__link" href="https://gamerhash.com">
      <!--begin::Icon-->
      <img class="header__icon" :src="icon" alt="Icon" />
      <!--end::Icon-->
      {{ text }}
    </a>
    <!--end::Link-->
  </li>
  <!--end::Item-->
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderListItem",
  props: {
    icon: {
      type: String,
      required: true,
      default() {
        return "";
      },
    },
    text: {
      type: String,
      required: true,
      default() {
        return "";
      },
    },
  },
});
</script>
