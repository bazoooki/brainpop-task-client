<template>
  <div class="zoom-activity-info">
      <ActivityTopicIcon :topic-data="activity.topic_data" :size="55" />
      <h1 class="title">{{ activity.topic_title }}</h1>
  </div>
</template>

<script>


import ActivityTopicIcon from "@/components/ActivityTopicIcon.vue";

export default {
  name: 'ZoomActivityInfo',
  components: {ActivityTopicIcon},
  props: {
    activity: {
      type: Object,
      required: true,
    }
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
  h1 {font-weight: bold}
</style>

