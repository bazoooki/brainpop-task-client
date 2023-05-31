import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { SET_ACTIVITY_DATA, HIDE_ACTIVITY, DISPLAY_ALL_ACTIVITIES } from '@/store/mutation-types';
import { prepareData, prepareV2Data } from '@/utils/utils';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    activities: [],
  },
  mutations: {
    [SET_ACTIVITY_DATA](state, activities) {
      state.activities = activities;
    },
    [HIDE_ACTIVITY](state, activityId) {
      const activity = state.activities.find((item) => item.id === activityId);
      if (!activity) {
        return;
      }
      activity.hidden = true;
      state.activities = [...state.activities.filter((item) => item.id !== activity.id), activity];
    },
    [DISPLAY_ALL_ACTIVITIES](state) {
      state.activities = state.activities.map((item) => ({ ...item, hidden: false }));
    },
  },
  getters: {
    getActivityById: (state) => (id) => state.activities.find((activity) => activity.id === id),
  },
  actions: {
    hideActivity({ commit }, activityId) {
      commit(HIDE_ACTIVITY, activityId);
    },
    clearHiddenActivities({ commit }) {
      commit(DISPLAY_ALL_ACTIVITIES);
    },
    fetchActivities({ commit }) {
      const apiURL = `${process.env.VUE_APP_BASE_URL}/activities/v1`;
      axios
        .get(apiURL)
        .then((res) => {
          const data = prepareData(res.data);
          commit(SET_ACTIVITY_DATA, data);
        })
        .catch((e) => {
          console.error(e);
        });
    },
    fetchActivitiesV2({ commit }) {
      const apiURL = `${process.env.VUE_APP_BASE_URL}/activities/v2`;
      axios
        .get(apiURL)
        .then((res) => {
          const activityData = prepareV2Data(res.data);
          commit(SET_ACTIVITY_DATA, activityData);
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
});

store.subscribe((mutation, state) => {
  const hiddenActivityIds = state.activities.filter((item) => item.hidden).map((item) => item.id);
  localStorage.setItem('activityStoreHiddenRows', JSON.stringify(hiddenActivityIds));
});

export default store;
