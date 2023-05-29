<template>
  <div class="zoom">
    <ZoomActivityInfo :activity="activityData" />
  </div>
</template>

<script>


import ZoomActivityInfo from "@/components/ZoomActivityInfo.vue";

export default {
  name: 'Zoom',
  components: {ZoomActivityInfo},
  computed: {
    activityData() {
      return this.$store.getters.getActivityById(this.$route.params.id)
    },
  },
  mounted() {
    this.$store.dispatch("fetchActivities");
  }
}
</script>

