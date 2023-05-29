import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import { humanize} from "@/utils/utils";

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    activities: []
  },
  mutations: {
    setActivityData(state, activityData) {
      state.activities = activityData.map(activity => {
        return {
          id: activity.id,
          resource_type: activity.resource_type,
          score: activity.score,
          possible_score: activity.possible_score,
          product: activity.product,
          d_created: activity.d_created,
          topic_data: activity.topic_data,
          comment: activity.comment,
          topic_title: `${humanize(activity.topic_data.name)} ${humanize(activity.resource_type)}`,
        };
      });
    },
  },
  actions: {
    fetchActivities({commit}) {
      const apiURL = "http://localhost:3000/activities/v1";
      axios
        .get(apiURL)
        .then(res => {
          commit("setActivityData", res.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
})


export default store
