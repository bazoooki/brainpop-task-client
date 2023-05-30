<template>
  <div class="activities">
    API V2
    <StudentActivities :api-v2="true" />
  </div>
</template>

<script>



import StudentActivities from "@/components/StudentActivities.vue";

export default {
  name: 'Activities2',
  components: {StudentActivities},
}
</script>


