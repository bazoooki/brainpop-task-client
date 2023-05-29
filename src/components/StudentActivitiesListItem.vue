<template>
    <div class="activities-list-item">
      <div class="topic-title">
        {{activity.topic_title}}
      </div>
    </div>
</template>

<script>
export default {
  name: 'StudentActivitiesListItem',
  props: {
    activity: Object,
  },
};
</script>


<style>

  .activities-list-item {
    padding: 1.2rem;
    padding-bottom: 1.5rem !important;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 1rem;
  }
  .topic-title {
    text-transform: capitalize;
  }
</style>
