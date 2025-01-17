import { defineStore } from "pinia";

interface STATE {
    lang:string;
}

export const useLangStore = defineStore('langs',{
    state: () : STATE =>({
        lang:'enUS'
    }),
    actions:{
        setLang(lang:string){
            this.lang = lang;
        },
        getLang() {
            return this.lang;
        }
    }
});