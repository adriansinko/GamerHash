<template>
  <!--begin::Header-->
  <header class="header">
    <Navbar />

    <!--begin::Hero-->
    <div class="header__hero">
      <!--begin::Information-->
      <div class="header__information">
        <!--begin::Main-->
        <div class="header__main">
          <!--begin::Image-->
          <img
            class="header__image"
            :src="getImagesPath('header', 'bg_text.svg')"
            alt="Text"
          />
          <!--end::Image-->

          <HeaderList>
            <HeaderListItem
              v-for="(link, index) in headerLinks"
              :key="index"
              :text="link.text"
              :icon="link.icon"
            />
          </HeaderList>

          <!--begin::Description-->
          <div class="header__description">
            <a
              class="header__link header__link--description"
              href="https://gamerhash.com"
              >what can I do with earned funds?</a
            >
          </div>
          <!--end::Description-->
        </div>
        <!--end::Main-->
      </div>
      <!--end::Information-->
      <div class="header__bottom">
        <!--begin::Link-Login-->
        <a href="#" @click.prevent="scroll('wallet')">
          <!--begin::Image-->
          <img :src="getImagesPath('header', 'arrow.svg')" alt="Arrow down" />
          <!--begin::Image-->
        </a>
        <!--begin::Link-Login-->
      </div>
    </div>
    <!--end::Hero-->
  </header>
  <!--end::Header-->
</template>

<script>
import { defineComponent } from "vue";
import Navbar from "@/layout/navbar/Navbar";
import HeaderList from "@/layout/header/components/HeaderList";
import HeaderListItem from "@/layout/header/components/HeaderListItem";
import headerLinks from "@/static/headerLinks";
import { getImagesPath } from "@/core/helpers/assets";

export default defineComponent({
  name: "Header",
  components: {
    Navbar,
    HeaderList,
    HeaderListItem,
  },
  setup() {
    const scroll = (section) => {
      document.querySelector(`.${section}`).scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    };

    return {
      getImagesPath,
      headerLinks,
      scroll,
    };
  },
});
</script>
