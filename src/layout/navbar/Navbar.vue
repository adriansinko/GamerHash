<template>
  <!--begin::Navbar-->
  <nav class="navbar">
    <!--begin::Container-->
    <div class="container">
      <!--begin::Wrapper-->
      <div class="navbar__wrapper">
        <Logo class="navbar__logo" />

        <Menu class="navbar__menu" />
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Container-->
  </nav>
  <!--end::Navbar-->
</template>

<script>
import { defineComponent } from "vue";
import Logo from "@/components/Logo";
import Menu from "@/layout/menu/Menu";

export default defineComponent({
  name: "Navbar",
  components: {
    Logo,
    Menu,
  },
});
</script>
