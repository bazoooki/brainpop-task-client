import Vue from 'vue'
import Vuex from 'vuex'

import activity from "@/store/modules/activity";


Vue.use(Vuex)


const store = new Vuex.Store({
  modules: {
    activity: activity,
  }
});



export default store
