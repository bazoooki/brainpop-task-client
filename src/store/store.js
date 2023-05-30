import Vue from 'vue'
import Vuex from 'vuex'


import activity from "@/store/modules/activity";


Vue.use(Vuex)


const store = new Vuex.Store({
  modules: {
    activity: activity,
  }
});

// const store = new Vuex.Store({
//   state: {
//     activities: []
//   },
//   mutations: {
//     setActivityData(state, activityData) {
//       state.activities = activityData.map(activity => {
//         return {
//           id: activity.id,
//           resource_type: activity.resource_type,
//           score: activity.score,
//           possible_score: activity.possible_score,
//           product: activity.product,
//           d_created: activity.d_created,
//           topic_data: activity.topic_data,
//           comment: activity.comment,
//           topic_title: `${humanize(activity.topic_data.name)} ${humanize(activity.resource_type)}`,
//           is_zoom_view: isActivityZoom(activity.resource_type),
//           is_scored: (isActivityScore(activity.resource_type) && !!activity.score.length && !!activity.possible_score.length),
//           createdAt: new Date(activity.d_created * 1000),
//         };
//       });
//     },
//   },
//   getters: {
//     getActivityById: (state) => (id) => {
//       return state.activities.find(activity => activity.id === id)
//     }
//   },
//   actions: {
//     fetchActivities({commit}) {
//       const apiURL = "http://localhost:3000/activities/v1";
//       axios
//         .get(apiURL)
//         .then(res => {
//           commit("setActivityData", res.data);
//         })
//         .catch(e => {
//           console.log(e);
//         });
//     }
//   },
// })


export default store
