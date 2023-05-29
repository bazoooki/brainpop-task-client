<template>
  <div class="student-activities">
    <StudentActivitiesListFilters :activities="activities" />
    <StudentActivitiesList :activities="groupedActivities" />
  </div>
</template>

<script>

import StudentActivitiesList from "@/components/StudentActivitiesList.vue";
import StudentActivitiesListFilters from "@/components/StudentActivitiesListFilters.vue";

export default {
  name: 'StudentActivities',
  components: {StudentActivitiesListFilters, StudentActivitiesList},
  computed: {
    activities () {
      return this.$store.state.activities
    },
    groupedActivities() {
      return this.$store.state.activities
    },

  },
  mounted() {
    this.$store.dispatch("fetchActivities");
  }
}
</script>
<style>
.student-activities {

}
</style>
