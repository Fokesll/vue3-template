<template>
  <a-dropdown :trigger="['click']" placement="bottomRight" class="float-right">
    <span class="ant-dropdown-link" @click.prevent>
      <svg-icon name="translate"></svg-icon>
    </span>
    <template #overlay>
      <a-menu>
        <a-menu-item
          v-for="item in languages"
          :key="item.lang"
          @click="changeLanguage(item.lang)"
        >
          <span>{{ item.text }}</span>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>

  <div>1</div>
</template>

<script setup lang="ts">

import { useI18n } from 'vue-i18n'
import { useLangStore } from '@/pinia/stores/langs';


const languages= [
    {text:'简体中文', lang:'zhCN'},
    {text:'english',lang:'enUS'}
];

const LangStore = useLangStore();
const { locale } = useI18n();
const langs = ['zhCN','enUS']
const changeLanguage = (language:string) =>{
    if(langs.findIndex(lang => lang === language) === -1){
        console.log('no language')
    }
    else{
        locale.value = language
        LangStore.setLang(language)
    }
}


</script>

<style lang="scss" scoped></style>
