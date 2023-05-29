<template>
  <div class="student-activities">
    activities: {{activities}}
  </div>
</template>

<script>

export default {
  name: 'StudentActivities',
  computed: {
    activities() {
      return this.$store.state.activities;
    }
  },
  mounted() {
    this.$store.dispatch("fetchActivities");
  }
}
</script>
