import Vue from 'vue'
import App from './App.vue'
import router from "./router";

Vue.config.productionTip = false

import { TweenMax, TimelineMax } from "gsap";
window.TweenMax = TweenMax;
window.TimelineMax = TimelineMax;
import ScrollMagic from "scrollmagic";
window.ScrollMagic = ScrollMagic;

import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js";

import mixin from '@/utils/mixin'
Vue.mixin(mixin)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
