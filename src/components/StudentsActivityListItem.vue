<template>
  <div class="activity-list-item">
    <div class="activity-info">

      <ActivityTopicIcon
        :topic-data="activity.topic_data"
        :size="30"
        :junior="activity.product === 'bpjr'"
      />

      <div class="activity-topic">

        <div class="topic-title">{{ activity.topic_title }}</div>
        <div>date</div>
      </div>

    </div>

    <div class="activity-settings">
      <div v-if="activity.is_scored" class="activity-score">Score 0 / 0</div>

      <button v-if="activity.is_zoom_view" @click="openZoom">View</button>
    </div>
  </div>
</template>

<script>

import ActivityTopicIcon from "@/components/ActivityTopicIcon.vue";

export default {
  name: 'StudentsActivityListItem',
  components: {ActivityTopicIcon},
  methods: {
    openZoom () {
      this.$emit('update:selectedActivityId', this.activity.id)
    }
  },
  props: {
    activity: Object,
  },
};
</script>


<style scoped>

.activity-list-item {
  padding: 1.2rem;
  padding-bottom: 1.5rem !important;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 1rem;
  display: flex;
  justify-items: center;
  justify-content: space-between;
}

.activity-info {
  flex-wrap: wrap;
  display: flex;

  height: 100%;
  align-items: center;
}

.activity-topic {
  display: flex;
  margin: 0px 10px;
  justify-items: left;
  flex-direction: column;
  text-align: left;
}

.topic-title {
  text-transform: capitalize;
}

.activity-settings {
  display: flex;
  align-items: center;

}

.activity-score {
  padding: 0 6px;
}
</style>
