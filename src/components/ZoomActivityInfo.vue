<template>
  <div class="flex items-center flex-col  text-gray-700">
    <ActivityTopicIcon
      :topic-data="activity.topic_data"
      :size="55"
    />
    <h1 class=" text-3xl font-bold my-2 lg:my-4">
      {{ topicTitle }}
    </h1>
    <DateTime
      :date="topicDate"
    />
    <div class="font-medium text-3xl my-2 lg:my-4 flex justify-start w-full">
      {{activity.comment}}
    </div>
    <div v-if="isScore" class="flex w-full my-4 lg:my-4 px-1 justify-start text-lg text-primary font-light">
      Score <span class="font-bold px-1">{{ activity.score }}/{{ activity.possible_score }}</span>
    </div>
  </div>
</template>

<script>


import ActivityTopicIcon from "@/components/ActivityTopicIcon.vue";
import DateTime from "@/components/DateTime.vue";
import {humanize} from "@/utils/utils";
import {activityTypesSettings} from "@/utils/activities.consts";

export default {
  name: 'ZoomActivityInfo',
  components: {DateTime, ActivityTopicIcon},
  computed: {
    topicDate() {
      return new Date(this.activity.d_created * 1000)
    },
    topicTitle() {
      return `${humanize(this.activity.topic_data.name)} ${humanize(this.activity.resource_type)}`
    },
    isScore() {
      return (!!activityTypesSettings[this.activity.resource_type].score && !!this.activity.score.length && !!this.activity.possible_score.length)
    },
  },
  props: {
    activity: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style scoped>
.zoom-activity-info {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #222
}


.teacher-comment {
  font-size: 24px;
  text-align: left;
  width: 100%;
  color: black;
  font-weight: bold;
  margin: 30px 0px;
}
.activity-score {
  padding: 0 6px;
  text-align: left;
  width: 100%;
  color: #0f766e;
  font-size: 24px;
  font-weight: bolder;
  margin: 30px 0px;
}

</style>

