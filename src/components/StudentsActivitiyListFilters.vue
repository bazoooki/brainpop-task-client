<template>
  <div class="w-full space-y-2">
    <div class="list-filters-search">
      <SearchAutocomplete
        :suggestions="suggestions"
        v-on="$listeners"
      />
    </div>
    <div class="text-sm ">Filter by:</div>
    <div class="list-filters-type space-y-1">
      <StudentsActivityListFiltersButton
        v-for="activityType in activityTypes"
        :selected="!!activityTypeFilters.includes(activityType)"
        :value="activityType"
        :key="activityType"
        @toggleSelect="toggleSelectedType"/>
    </div>
  </div>
</template>

<script>

import SearchAutocomplete from "@/components/SearchAutoComplete.vue";
import StudentsActivityListFiltersButton from "@/components/StudentsActivityListFiltersButton.vue";
import {
  ALL_WORK,
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
      this.$emit('toggleActivityTypeFilter', value)
    }
  },
  computed: {
    activityTypes() {
      return [
        ALL_WORK,
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
      return this.activities.map(item => `${humanize(item.topicData.name)} ${humanize(item.resourceType)}`)
    }
  },
  props: {
    activityTypeFilters: {
      type: Array
    },
    activities: {
      type: Array,
      required: true
    }
  }
};
</script>
