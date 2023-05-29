<template>
  <div class="student-activities">
    <StudentActivityListFilters :activities="activities" />
    <StudentsActivityList :activities="groupedActivities" />

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import StudentsActivityList from "@/components/StudentsActivitysList.vue";
import StudentActivityListFilters from "@/components/StudentsActivitiyListFilters.vue";

export default {
  name: 'Activities',
  components: {StudentActivityListFilters, StudentsActivityList},
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

