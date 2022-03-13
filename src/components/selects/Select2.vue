<template>
  <!--begin::Select2-->
  <select ref="select"></select>
  <!--end::Select2-->
</template>

<script>
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
  name: "Select2",
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    configuration: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const select = ref();

    onMounted(() => {
      // eslint-disable-next-line no-undef
      $(select.value)
        .select2(
          Object.assign(
            {
              data: props.options,
            },
            props.configuration
          )
        )
        .val(props.value)
        .trigger("change");
    });

    onUnmounted(() => {
      // eslint-disable-next-line no-undef
      $(select.value).off().select2("destroy");
    });

    return {
      select,
    };
  },
});
</script>
