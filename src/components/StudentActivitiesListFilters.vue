<template>

  <div>
    <Autocomplete :suggestions="suggestions"/>
  </div>

</template>

<script>


import Autocomplete from "@/components/AutoComplete.vue";

export default {
  name: 'StudentActivitiesListFilters',
  components: {Autocomplete},
  computed: {
    suggestions() {
      return this.activities.map(item=>item.topic_title)
    }
  },
  props: {
    activities: {
      type: Array
    }
  }
};
</script>
