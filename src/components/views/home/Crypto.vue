<template>
  <!--begin::Crypto-->
  <section class="crypto">
    <!--begin::Container-->
    <div class="container">
      <!--begin::Wrapper-->
      <div class="crypto__wrapper">
        <!--begin::Title-->
        <h2 class="crypto__title section-title">
          We are creating GamerCoin (GHX) - <br />
          native token for gamers!
        </h2>
        <!--end::Title-->

        <!--begin::Description-->
        <p class="crypto__description section-description">
          GamerCoin is a token of GamerHash platform - it's the last puzzle of
          gaming gaming ecosystem and fuel which makes 500.00 users life <br />
          easier.
          <br />
          Gamers will have many ways to earn GHX trough mining or entertainment
          on the platform. Keeping tokens in the wallet will bring <br />
          many benefits & spending GHX in the Marketplace will open special
          offers. <br />
          <strong>It's a game changer for gaming generation!</strong>
        </p>
        <!--end::Description-->

        <!--begin::Bottom-->
        <div class="crypto__bottom">
          <Select2
            class="select-crypto"
            :options="cryptoList"
            value="1"
            :configuration="configurationSelectInCrypto"
          />
        </div>
        <!--end::Bottom-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Container-->
  </section>
  <!--end::Crypto-->
</template>

<script>
import { defineComponent } from "vue";
import cryptoList from "@/static/cryptoList";
import Select2 from "@/components/selects/Select2";
import { configurationSelectInCrypto } from "@/common/helpers";

export default defineComponent({
  name: "Crypto",
  components: {
    Select2,
  },
  setup() {
    return {
      cryptoList,
      configurationSelectInCrypto,
    };
  },
});
</script>

<style lang="scss" scoped>
:deep() .select2 {
  &-selection {
    &--single {
      height: 32px;
    }

    &__arrow {
      height: 32px !important;
      width: 10px !important;
      top: 0 !important;
      right: 15px !important;
    }
  }
}
</style>
