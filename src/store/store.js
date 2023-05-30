import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import {SET_ACTIVITY_DATA} from "@/store/mutation-types";

Vue.use(Vuex)

function prepareData(data) {
  let arr = []
  data.map(item => {
    const activities = item.activities.map(activity => ({
      ...activity,
      resource_type: item.resource_type
    }))
    arr = [...arr, ...activities]
  })
  return arr
}


const store = new Vuex.Store({
  state: {
    activities: []
  },
  mutations: {
    [SET_ACTIVITY_DATA](state, activities) {
      state.activities = activities
    },
  },
  getters: {
    getActivityById: (state) => (id) => {
      return state.activities.find(activity => activity.id === id)
    }
  },
  actions: {
    fetchActivities({commit}) {
      const apiURL = "http://localhost:3000/activities/v1";
      axios
        .get(apiURL)
        .then(res => {
          commit(SET_ACTIVITY_DATA, res.data );
        })
        .catch(e => {
          console.log(e);
        });
    },
    fetchActivitiesV2({commit}) {
      const apiURL = "http://localhost:3000/activities/v2";
      axios
        .get(apiURL)
        .then(res => {

          const activityData = prepareData(res.data)

          commit(SET_ACTIVITY_DATA, activityData);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
});



export default store
