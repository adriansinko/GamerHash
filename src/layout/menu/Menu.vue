<template>
  <!--begin::menu-->
  <div class="menu">
    <!--begin::List-->
    <ul class="menu__list">
      <!--begin::Item-->
      <li class="menu__item">
        <!--begin::Link-->
        <a href="#" class="button button--login" @click="showModal = !showModal"
          >Log in</a
        >
        <!--end::Link-->
      </li>
      <!--end::Item-->
    </ul>
    <!--end::List-->
  </div>
  <!--end::menu-->

  <Modal :active="showModal">
    <template #content>
      <LogIn />
    </template>
  </Modal>
</template>

<script>
import { defineComponent, ref } from "vue";
import Modal from "@/components/modal/Modal";
import LogIn from "@/views/authentication/LogIn";

export default defineComponent({
  name: "Menu",
  components: {
    Modal,
    LogIn,
  },
  setup() {
    const showModal = ref(false);

    return {
      showModal,
    };
  },
});
</script>
