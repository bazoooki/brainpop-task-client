<template>
  <div class="activity-list-item">
    <div class="activity-info">
      <ActivityTopicIcon
        :topic-data="activity.topic_data"
        :size="30"
        :junior="activity.product === 'bpjr'"
      />
      <div class="activity-topic">
        <div class="topic-title">
          {{ activity.topic_title }}
        </div>
        <DateTime
          :date="activity.createdAt"
          small
        />
      </div>
    </div>
    <div class="activity-settings">
      <div v-if="activity.is_scored" class="activity-score">
        Score {{ activity.score }} / {{ activity.possible_score }}
      </div>
      <button class="icon-btn" v-if="activity.is_zoom_view" @click="openZoom">
        <span>
          <font-awesome-icon icon="fa-solid fa-eye"/>
          View work
        </span>
      </button>
      <button class="icon-btn hide-btn" @click="toggleVisible">
          <font-awesome-icon icon="fa-solid fa-eye-slash"/>
      </button>
    </div>
  </div>
</template>

<script>

import ActivityTopicIcon from "@/components/ActivityTopicIcon.vue";
import DateTime from "@/components/DateTime.vue";

export default {
  name: 'StudentsActivityListItem',
  components: {DateTime, ActivityTopicIcon},
  methods: {
    toggleVisible() {
      this.$emit('toggleVisible', this.activity.id)
    },
    openZoom() {
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
  padding: 1.1rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-top: 1rem;
  display: flex;
  position: relative;
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
