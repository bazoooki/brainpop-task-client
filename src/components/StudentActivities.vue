<template>
  <div class="activities">
    <h1>Timeline</h1>
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
    <Modal
      v-if="selectedActivityData"
      @close="selectedActivityId = null"
    >
      <ZoomActivityInfo
        :activity="selectedActivityData"
      />
    </Modal>
  </div>
</template>

<script>

import StudentsActivityList from "@/components/StudentsActivityList.vue";
import StudentActivityListFilters from "@/components/StudentsActivitiyListFilters.vue";
import ZoomActivityInfo from "@/components/ZoomActivityInfo.vue";
import Modal from "@/components/Modal.vue";
import {humanize} from "@/utils/utils";


export default {
  name: 'StudentActivities',
  components: {Modal, ZoomActivityInfo, StudentActivityListFilters, StudentsActivityList},
  props: {
    apiV2: {
      type: Boolean,
      default: () => false,
    }
  },
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
      return this.$store.state.activity.activities
    },
    filteredActivities() {
      return this.$store.state.activity.activities.filter(item => (
        humanize(item.resource_type).toLowerCase().indexOf(this.filters.search.toLowerCase()) > -1 ||
        humanize(item.topic_title).toLowerCase().indexOf(this.filters.search.toLowerCase()) > -1 ||
        humanize(item.topic_data.name).toLowerCase().indexOf(this.filters.search.toLowerCase()) > -1
      ))
        .filter(item => (this.filters.activityType === item.resource_type || this.filters.activityType === 'all'))
    },
  },
  mounted() {
    if (!!this.apiV2) {
      this.$store.dispatch("fetchActivitiesV2");
    } else {
      this.$store.dispatch("fetchActivities");
    }
  }
}
</script>

<style scoped>
.activities {
  position: relative;
  text-align: left;
  height: calc(100vh - 3rem);
  z-index: 2;
}

</style>

