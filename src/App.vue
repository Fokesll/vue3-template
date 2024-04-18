<template>
  <a-config-provider :locale="locales">
    <home />
  </a-config-provider>
</template>

<script setup lang="ts">
import enUS from "ant-design-vue/es/locale/en_US";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import {  computed } from "vue";

import home from "@v/home.vue";
import { useLangStore } from "./pinia/stores/langs";

const langStore = useLangStore();
const locales = computed(() => (langStore.getLang() === "zhCN" ? zhCN : enUS));
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  width: 100%;
}
</style>
