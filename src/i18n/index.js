import Vue from 'vue';
import VueI18n from 'vue-i18n'
import { get as CookieGet } from 'js-cookie';
Vue.use(VueI18n)
const en = {}
const zh = {}
const lang_en = Object.assign(require("./en"), en)
const lang_zh = Object.assign(require("./zh"), zh)
const i18n = new VueI18n({
  locale: CookieGet("POS_LANGUAGE") || 'en',
  messages: {
    en: lang_en,
    zh: lang_zh
  }
})

export default i18n