<template>
  <Wallet />
  <Crypto />
  <Calculator />
</template>

<script>
import { defineComponent } from "vue";
import Wallet from "@/components/views/home/Wallet";
import Crypto from "@/components/views/home/Crypto";
import Calculator from "@/components/views/home/Calculator";

export default defineComponent({
  name: "Home",
  components: {
    Wallet,
    Crypto,
    Calculator,
  },
});
</script>
