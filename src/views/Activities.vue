<template>
  <div class="activities">
    <StudentActivities />
  </div>
</template>

<script>

import StudentActivities from '@/components/StudentActivities.vue';

export default {
  name: 'ActivitiesView',
  components: { StudentActivities },
};
</script>
