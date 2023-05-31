<template>
  <div class="flex items-center flex-col  text-gray-700">
    <ActivityTopicIcon
      :topic-data="activity.topicData"
      :size="55"
    />
    <h1 class=" text-3xl font-bold my-2 lg:my-4">
      {{ topicTitle }}
    </h1>
    <DateTime
      :date="topicDate"
    />
    <div class="font-medium text-3xl my-2 lg:my-4 flex justify-start w-full">
      {{ activity.comment }}
    </div>
    <div v-if="isScore"
         class="flex w-full my-4 lg:my-4 px-1 justify-start text-lg text-primary font-light">
      Score <span class="font-bold px-1">{{ activity.score }}/{{ activity.possibleScore }}</span>
    </div>
  </div>
</template>

<script>

import ActivityTopicIcon from '@/components/ActivityTopicIcon.vue';
import DateTime from '@/components/DateTime.vue';
import { humanize } from '@/utils/utils';
import { activityTypesSettings } from '@/utils/activities.consts';

export default {
  name: 'ZoomActivityInfo',
  components: { DateTime, ActivityTopicIcon },
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
  },
  props: {
    activity: {
      type: Object,
      required: true,
    },
  },
};
</script>
