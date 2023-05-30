<template>
  <div class="activities">
    <div class="activity-list">
      <StudentActivityListFilters
        :activities="activities"
        :search.sync="filters.search"
        :activityTypeFilter.sync="filters.activityType"
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
import {humanize} from "@/utils/utils";


export default {
  name: 'Activities',
  components: {Modal, ZoomActivityInfo, StudentActivityListFilters, StudentsActivityList},
  data() {
    return {
      selectedActivityId: null,
      filters: {
        activityType: 'all',
        search: ''
      }
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
      return  this.$store.state.activities.filter(item => (
        humanize(item.resource_type).toLowerCase().indexOf(this.filters.search.toLowerCase()) > -1 ||
        humanize(item.topic_title).toLowerCase().indexOf(this.filters.search.toLowerCase()) > -1 ||
        humanize(item.topic_data.name).toLowerCase().indexOf(this.filters.search.toLowerCase()) > -1
      ));
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

