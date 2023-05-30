<template>
  <div class="zoom-activity-info">
    <ActivityTopicIcon
      :topic-data="activity.topic_data"
      :size="55"
    />
    <h1 class="title">
      {{ activity.topic_title }}
    </h1>
    <DateTime
      :date="activity.createdAt"
    />
    <div class="teacher-comment">
      {{activity.comment}}
    </div>
    <div v-if="activity.is_scored" class="activity-score">
      Score {{ activity.score }} / {{ activity.possible_score }}
    </div>
  </div>
</template>

<script>


import ActivityTopicIcon from "@/components/ActivityTopicIcon.vue";
import DateTime from "@/components/DateTime.vue";

export default {
  name: 'ZoomActivityInfo',
  components: {DateTime, ActivityTopicIcon},
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

h1 {
  font-weight: bold
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

