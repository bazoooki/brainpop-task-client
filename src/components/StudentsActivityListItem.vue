<template>
  <div class="w-full border border-gray-200 p-5 flex items-center justify-between relative group">
    <div class="w-0.5 h-4 bg-gray-300 absolute left-10 -top-4"></div>
    <div class="flex items-center items-center h-full">
      <ActivityTopicIcon
        :topic-data="activity.topicData"
        :size="35"
        :junior="activity.product === 'bpjr'"
      />
      <div class="flex justify-start mx-4 flex-col">
        <div class="topic-title">
          {{ topicTitle }}
        </div>
        <DateTime
          :date="topicDate"
          small
        />
      </div>
    </div>
    <div class="activity-settings">

      <div v-if="isScore" class="activity-score">
        Score {{ activity.score }} / {{ activity.possibleScore }}
      </div>
      <button class="icon-btn text-xs hover:bg-primary-bold hover:bg-opacity-10 p-1.5 rounded"
              v-if="isZoom" @click="openZoom">
        <span>
          <font-awesome-icon icon="fa-solid fa-eye"/>
          View work
        </span>
      </button>
      <button
        class="text-primary  hide-btn text-xxs flex items-center justify-between px-2
        hover:bg-primary-bold hover:bg-opacity-10 rounded opacity-0 group-hover:opacity-100"
        @click="hideActivity">
        <span class="px-1">hide</span>
        <font-awesome-icon icon="fa-solid fa-eye-slash mx-0"/>
      </button>
    </div>

  </div>
</template>

<script>

import ActivityTopicIcon from '@/components/ActivityTopicIcon.vue';
import DateTime from '@/components/DateTime.vue';
import { activityTypesSettings } from '@/utils/activities.consts';
import { humanize } from '@/utils/utils';

export default {
  name: 'StudentsActivityListItem',
  components: { DateTime, ActivityTopicIcon },
  methods: {
    hideActivity() {
      this.$emit('hideActivity', this.activity.id);
    },
    openZoom() {
      this.$emit('update:selectedActivityId', this.activity.id);
    },
  },
  computed: {
    topicDate() {
      return new Date(this.activity.dCreated * 1000);
    },
    topicTitle() {
      return `${humanize(this.activity.topicData.name)} ${humanize(this.activity.resourceType)}`;
    },
    isScore() {
      return (!!activityTypesSettings[this.activity.resourceType].score
        && !!this.activity.score.length && !!this.activity.possibleScore.length);
    },
    isZoom() {
      return !!activityTypesSettings[this.activity.resourceType].zoom;
    },
  },
  props: {
    activity: Object,
  },
};
</script>

<style scoped>

.topic-title {
  text-transform: capitalize;
  font-weight: bold;
  font-size: 14px;
  color: #000
}

.activity-settings {
  display: flex;
  align-items: center;

}

.activity-score {
  padding: 0 6px;
  color: #0f766e;
  font-size: 12px;
  font-weight: bolder;
}

.icon-btn {
  cursor: pointer;
  background: none;
  color: #0f766e;
  border: none;
  font-weight: bolder;
}

.hide-btn {
  position: absolute;
  bottom: 5px;
  right: 5px;
}
</style>
