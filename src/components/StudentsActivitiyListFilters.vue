<template>

  <div>
    <SearchAutocomplete :suggestions="suggestions"/>
  </div>

</template>

<script>


import SearchAutocomplete from "@/components/SearchAutoComplete.vue";

export default {
  name: 'StudentsActivityListFilters',
  components: {SearchAutocomplete},
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
