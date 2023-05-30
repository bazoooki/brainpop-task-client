import {humanize} from "@/utils/utils";
import axios from "axios";
import {activityTypesSettings} from "@/utils/activities.consts";



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

const activity = {
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
          is_zoom_view: !!activityTypesSettings[activity.resource_type].zoom,
          is_scored: (!!activityTypesSettings[activity.resource_type].score && !!activity.score.length && !!activity.possible_score.length),
          createdAt: new Date(activity.d_created * 1000),
        };
      });
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
          commit(SET_ACTIVITY_DATA, res.data);
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
          console.log('api v2 data: ', res.data)
          const data = prepareData(res.data)
          console.log('prepared v2 data: ', data)
          commit(SET_ACTIVITY_DATA, data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
}
export default activity
