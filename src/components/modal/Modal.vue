<template>
  <!--begin::Modal-->
  <teleport v-if="showModal" to="body">
    <div :class="{ 'modal--disabled': !showModal }" class="modal">
      <!--begin::Title-->
      <p class="modal__title">Log In</p>
      <!--end::Title-->

      <!--begin::Content-->
      <div class="modal__content">
        <span class="modal__close" @click="closeModal">&times;</span>
        <slot name="content"></slot>
      </div>
      <!--end::Content-->
    </div>
  </teleport>
  <!--end::Modal-->
</template>

<script>
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    active: {
      type: Boolean,
      default: () => false,
    },
  },
  setup(props) {
    const showModal = ref(false);

    const closeModal = () => {
      showModal.value = !showModal.value;

      document.body.classList.remove("modal-on");
    };

    watch(
      () => props.active,
      () => {
        document.body.classList.add("modal-on");
        showModal.value = !showModal.value;
      }
    );

    return {
      showModal,
      closeModal,
    };
  },
});
</script>
