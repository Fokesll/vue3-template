<template>
    <div class="home">
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
          </a>
          <a href="https://vuejs.org/" target="_blank">
            <img src="@a/vue.svg" class="logo vue" alt="Vue logo" />
          </a>
      
          <h1 class="w-24 ">{{$t('basic.lang')}} : {{langs.getLang()}}</h1>
          <a-pagination :total="50" show-size-changer />
          <div>{{localStore.counter}}</div>
          <button @click="handle">add</button>

          <translate></translate>

          <div id="vditor"></div>

    </div>
</template>

<script setup lang="ts">
import { useStore } from '@s/stores/test.ts';
import { useLangStore} from '@s/stores/langs.ts';
import translate from '@c/language.vue'

const langs = useLangStore();
const localStore = useStore();

  function handle(){
    localStore.ins();
    langs.setLang('cn');
}

import Vditor from 'vditor'
import 'vditor/dist/index.css';
import { onMounted,ref } from 'vue';

const vditor = ref()
onMounted(() => {
  vditor.value = new Vditor('vditor',{
    height: '50vh',
    width: '100%',
    preview:{
        theme:{
            current:'dark'
        }
    }
  })
})

</script>

<style lang="scss" scoped>



</style>