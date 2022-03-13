<template>
  <!--begin::Calculator-->
  <section class="calculator">
    <!--begin::Container-->
    <div class="container">
      <!--begin::Title-->
      <h2 class="calculator__title section-title">Profitability calculator</h2>
      <!--end::Title-->

      <!--begin::Description-->
      <p class="calculator__description section-description">
        You earn bitcoins. When BTC exchange rate goes up, your profit
        automatically increases.
      </p>
      <!--end::Description-->

      <!--begin::Content-->
      <div class="calculator__content">
        <!--begin::List-->
        <div class="calculator__list">
          <Card
            v-for="(graphic, index) in GraphicCards"
            :key="index"
            :title="graphic.text"
            :text="graphic.price"
            :image="graphic.image"
          />
        </div>
        <!--end::List-->

        <!--begin::Description-->
        <p class="calculator__description section-description">
          Crypto exchange rates are independent of GamerHas operations, the
          estimation is purely for illustrative purpose
        </p>
        <!--end::Description-->
      </div>
      <!--end::Content-->

      <!--begin::Bottom-->
      <div class="calculator__bottom">
        <!--begin::Link-->
        <a href="https://gamerhash.com" class="button button--check">
          <!--begin::Icon-->
          <img :src="getImagesIconPath('calculator', 'art.svg')" alt="Icon" />
          <!--end::Icon-->

          Check how much <br />
          your setup will earn
        </a>
        <!--end::Link-->
      </div>
      <!--end::Bottom-->
    </div>
    <!--end::Container-->
  </section>
  <!--end::Calculator-->
</template>

<script>
import { defineComponent } from "vue";
import Card from "@/components/cards/Card";
import GraphicCards from "@/static/graphicCards";
import { getImagesIconPath } from "@/core/helpers/assets";

export default defineComponent({
  name: "Home",
  components: {
    Card,
  },
  setup() {
    return {
      GraphicCards,
      getImagesIconPath,
    };
  },
});
</script>
