import Vue from 'vue'
import App from './App.vue'

import mdiVue from 'mdi-vue'
import * as mdijs from '@mdi/js'

import VueRouter from 'vue-router'

Vue.use(mdiVue,{
  icons : mdijs
});

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');
