<template>

  <div class="list-filters">
    <div class="list-filters-search">
      <SearchAutocomplete :suggestions="suggestions" v-on="$listeners"/>
    </div>
    <div class="list-filters-type-buttons">
      <StudentsActivityListFiltersButton
        value="all"
        @toggleSelect="toggleSelectedType"
        :selected="activityTypeFilter"
        key="all"
      />
      <StudentsActivityListFiltersButton
        v-for="activityType in activityTypes"
        :value="activityType"
        :selected="activityTypeFilter"
        :key="activityType"
        @toggleSelect="toggleSelectedType"/>

    </div>
  </div>
</template>

<script>


import SearchAutocomplete from "@/components/SearchAutoComplete.vue";
import StudentsActivityListFiltersButton from "@/components/StudentsActivityListFiltersButton.vue";

export default {
  name: 'StudentsActivityListFilters',
  components: {StudentsActivityListFiltersButton, SearchAutocomplete},

  methods: {
    toggleSelectedType(value) {
      if (this.activityTypeFilter === value) {
        return
      }

      this.$emit('update:activityTypeFilter', value)
    }
  },
  computed: {
    activityTypes() {
      return [...new Set(this.activities.map(item => item.resource_type))]
    },
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

.list-filters-type-buttons {
  padding: 10px;
}

</style>
