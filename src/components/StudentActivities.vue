<template>
  <div class="activities">
    <h1>Timeline</h1>
    <div class="activity-list">
      <StudentActivityListFilters
        :activities="activities"
        :search.sync="filters.search"
        @toggleActivityTypeFilter="toggleActivityTypeFilter"
        :activityTypeFilters="filters.types"
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
import {mapActions, mapGetters} from "vuex";


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
        types: ['all'],
        search: ''
      }
    }
  },
  methods: {
    ...mapActions(['fetchActivities', 'fetchActivitiesV2']),
    toggleActivityTypeFilter (activityId) {
      if (this.filters.types.includes(activityId) ) {
        this.filters.types = this.filters.types.filter(item=>item !== activityId)
      } else {
        this.filters.types.push(activityId)
      }
      if (!this.filters.types.length) {
        this.filters.types.push('all')
      }
    },
  },
  computed: {
    ...mapGetters(['getActivityById']),
    selectedActivityData() {
      return this.getActivityById(this.selectedActivityId)
    },
    activities() {
      return this.$store.state.activities
    },
    filteredActivities() {
      return this.activities.filter(item => (
        humanize(item.resource_type).toLowerCase().indexOf(this.filters.search.toLowerCase()) > -1 ||
        humanize( `${humanize(item.topic_data.name)} ${humanize(item.resource_type)}`).toLowerCase().indexOf(this.filters.search.toLowerCase()) > -1 ||
        humanize(item.topic_data.name).toLowerCase().indexOf(this.filters.search.toLowerCase()) > -1
      ))
        .filter(item => (this.filters.types.includes(item.resource_type) || this.filters.types.includes('all')))
    },
  },
  mounted() {
    if (!!this.apiV2) {
      this.fetchActivitiesV2();
    } else {
      this.fetchActivities();
    }
  }
}
</script>

<style scoped>


</style>

