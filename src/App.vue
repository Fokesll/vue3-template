

<template>
  <a-radio-group v-model:value="locale">
    <a-radio-button key="en" :value="enUS.locale">English</a-radio-button>
    <a-radio-button key="cn" :value="zhCN.locale">中文</a-radio-button>
  </a-radio-group>
  <a-config-provider :locale="locale === 'en' ? enUS : zhCN"">
    <home />
  </a-config-provider>
  
</template>

<script setup lang="ts">
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

import home from '@v/home.vue'


import { ref } from 'vue';


const locale = ref(enUS.locale);
dayjs.locale('en');


</script>

<style  lang="scss">
*{
  margin: 0;
  padding: 0;
}

html,
body{
  height: 100%;
  width: 100%;
}

</style>
