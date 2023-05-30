<template>

  <div class="list-filters">
    <div class="list-filters-search">
      <SearchAutocomplete :suggestions="suggestions" v-on="$listeners"/>
    </div>
    <div class="list-filters-tabs">
      filter by type
    </div>
  </div>
</template>

<script>


import SearchAutocomplete from "@/components/SearchAutoComplete.vue";

export default {
  name: 'StudentsActivityListFilters',
  components: {SearchAutocomplete},
  computed: {
    suggestions() {
      return this.activities.map(item => item.topic_title)
    }
  },
  props: {

    activityTypeFilter: {
      type: String,
      required: true
    },
    activities: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.list-filters {
  display: flex;
  flex-direction: column;

}

.list-filters-search {

}

.list-filters-tabs {
  padding: 10px;
}
</style>
