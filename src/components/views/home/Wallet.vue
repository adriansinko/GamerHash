<template>
  <!--begin::Wallet-->
  <section class="wallet">
    <!--begin::Container-->
    <div class="container">
      <!--begin::Wrapper-->
      <div class="wallet__wrapper">
        <!--begin::Box-->
        <div class="wallet__box">
          <!--begin::Box-Main-->
          <div class="wallet__box-main">
            <!--begin::Lottie-->
            <Vue3Lottie
              class="wallet_animation"
              :animationData="DataJSON"
              :height="256"
              :width="256"
            />
            <!--end::Lottie-->

            <!--begin::Information-->
            <div class="wallet__information">
              <!--begin::Title-->
              <p class="wallet__title wallet__title--coin">GAMERCOIN (GHX)</p>
              <!--end::Title-->
            </div>
            <!--end::Information-->

            <!--begin::Number-->
            <p class="wallet__number">
              0x728f30fa2f100742c7949d1961804fa8e0b1387d
              <!--begin::Image-Icon-->
              <img
                class="wallet__paste"
                :src="getImagesPath('wallet', 'paste.svg')"
                alt="Icon clipboard"
                @click="copy"
              />
              <!--end::Image-Icon-->
            </p>
            <!--begin::Input-->
            <input
              type="hidden"
              ref="numberWallet"
              value="0x728f30fa2f100742c7949d1961804fa8e0b1387d"
            />
            <!--end::Input-->
          </div>
          <!--end::Box-Main-->

          <!--begin::Bottom-->
          <div class="wallet__box-bottom">
            <!--begin::Button-->
            <div class="wallet__button">
              <!--begin::Link-->
              <a
                href="https://gamerhash.com"
                class="button button--check button--check-padding-9-35"
              >
                <!--begin::Icon-->
                <img
                  :src="getImagesPath('wallet', 'metamsk-logo.svg')"
                  alt="Icon"
                />
                <!--end::Icon-->

                Add to MetaMask
              </a>
              <!--end::Link-->
            </div>
            <!--end::Button-->
          </div>
          <!--end::Bottom-->
        </div>
        <!--end::Box-->

        <!--begin::Main-->
        <div class="wallet__main">
          <!--begin::Title-->
          <h2 class="wallet__title section-title">
            We are creating GamerCoin (GHX) - native token for gamers!
          </h2>
          <!--end::Title-->

          <!--begin::Description-->
          <p class="wallet__description section-description">
            GamerCoin is a token of GamerHash platform - it's the last puzzle of
            gaming gaming ecosystem and fuel which makes 500.00 users life
            easier.
            <br />
            Gamers will have many ways to earn GHX trough mining or
            entertainment on the platform. Keeping tokens in the wallet will
            bring many benefits & spending GHX in the Marketplace will open
            special offers. <br />
            <strong>It's a game changer for gaming generation!</strong>
          </p>
          <!--end::Description-->
        </div>
        <!--end::Main-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Container-->
  </section>
  <!--begin::Wallet-->
</template>

<script>
import { defineComponent, ref } from "vue";
import { Vue3Lottie } from "vue3-lottie";
import DataJSON from "@/assets/animations/data.json";
import { getImagesPath } from "@/core/helpers/assets";

export default defineComponent({
  name: "Wallet",
  components: {
    Vue3Lottie,
  },
  setup() {
    const numberWallet = ref();

    const copy = () => {
      navigator.clipboard.writeText(numberWallet.value.value).then(() => {
        alert("Copied to clipboard");
      });
    };

    return {
      getImagesPath,
      DataJSON,
      numberWallet,
      copy,
    };
  },
});
</script>

<style lang="scss" scoped>
:deep() .lottie-animation-container {
  max-width: 256px;
  max-height: 256px;
  width: 100%;
  height: 100%;
}
</style>
