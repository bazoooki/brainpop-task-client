<template>
  <div class="zoom">
    <ZoomActivityInfo :activity="activityData" />
  </div>
</template>

<script>

import ZoomActivityInfo from '@/components/ZoomActivityInfo.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ZoomView',
  components: { ZoomActivityInfo },
  computed: {
    ...mapGetters(['getActivityById']),
    activityData() {
      return this.getActivityById(this.$route.params.id);
    },
  },
  methods: {
    ...mapActions(['fetchActivities']),
  },
  mounted() {
    this.fetchActivities();
  },
};
</script>
