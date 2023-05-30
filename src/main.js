import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faXmark, faSearch, faEye, faCheck } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faXmark, faSearch, faEye, faCheck)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
