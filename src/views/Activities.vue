<template>
  <div class="activities">
    <div class="activity-list">
      <StudentActivityListFilters
        :activities="activities"
      />
      <StudentsActivityList
        :selectedActivityId.sync="selectedActivityId"
        :activities="filteredActivities"
      />
    </div>
    <Modal v-if="selectedActivityData" @close="selectedActivityId = null">
      <ZoomActivityInfo
        :activity="selectedActivityData"
      />
    </Modal>
  </div>
</template>

<script>

import StudentsActivityList from "@/components/StudentsActivitysList.vue";
import StudentActivityListFilters from "@/components/StudentsActivitiyListFilters.vue";
import ZoomActivityInfo from "@/components/ZoomActivityInfo.vue";
import Modal from "@/components/Modal.vue";


export default {
  name: 'Activities',
  components: {Modal, ZoomActivityInfo, StudentActivityListFilters, StudentsActivityList},
  data() {
    return {
      selectedActivityId: null
    }
  },
  computed: {
    selectedActivityData() {
      return this.activities.find(activity => activity.id === this.selectedActivityId)
    },
    activities() {
      return this.$store.state.activities
    },
    filteredActivities() {
      return this.$store.state.activities
    },
  },
  mounted() {
    this.$store.dispatch("fetchActivities");
  }
}
</script>

<style scoped>
.activities {
  position: relative;
  height: calc(100vh - 3rem);
  z-index: 2;
}
</style>

