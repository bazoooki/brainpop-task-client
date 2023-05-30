<template>

  <div class="list-filters">
    <div class="list-filters-search">
      <SearchAutocomplete :suggestions="suggestions" v-on="$listeners"/>
    </div>
    <div :style="{margin: '10px 0px'}">Filter by:</div>
    <div class="list-filters-type">
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
import {
  CHALLENGE,
  MAKE_A_MAP,
  DRAW_ABOUT_IT,
  EASY_QUIZ,
  MAKE_A_MOVIE,
  MOVIE,
  QUIZ,
  RELATED_READING,
  WORD_PLAY
} from "@/utils/activities.consts";
import {humanize} from "@/utils/utils";

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
      return [
        CHALLENGE,
        MAKE_A_MAP,
        DRAW_ABOUT_IT,
        EASY_QUIZ,
        MAKE_A_MOVIE,
        MOVIE,
        QUIZ,
        RELATED_READING,
        WORD_PLAY
      ]
    },
    suggestions() {
      return this.activities.map(item => `${humanize(item.topic_data.name)} ${humanize(item.resource_type)}`)
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

.list-filters-type {
  display: flex;
  justify-items: left;
  padding-bottom: 10px;
}

</style>
