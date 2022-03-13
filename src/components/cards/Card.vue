<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Title-->
    <h3 class="card__title">{{ title }}</h3>
    <!--end::Title-->

    <!--begin::Image-->
    <img class="card__image" :src="image" alt="Card image" />
    <!--end::Image-->

    <!--begin::Text-->
    <p class="card__text">{{ text }}</p>
    <!--end::Text-->
  </div>
  <!--end::Card-->
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
});
</script>
