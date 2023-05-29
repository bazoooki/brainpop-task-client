<template>

  <div>
    <template v-for="(group, month) in groupedActivitiesByMonth">
      <h3 :key="month" class="month">{{ month }}</h3>
      <template v-for="activity in group">
        <StudentActivitiesListItem :activity="activity" :key="activity.id"/>
      </template>
    </template>
  </div>

</template>

<script>

import {groupByKey} from '../utils/utils'
import StudentActivitiesListItem from "@/components/StudentActivitiesListItem.vue";

export default {
  name: 'StudentActivitiesList',
  components: {StudentActivitiesListItem},
  computed: {
    groupedActivitiesByMonth() {
      const list = this.activities.map(activity => {
        const date = new Date(activity.d_created * 1000)
        const created_month = new Intl
          .DateTimeFormat('en-US', {
            month: 'long'
          })
          .format(date)
        return {
          ...activity,
          created_month,
        }
      });
      return groupByKey(list, "created_month")
    }
  },
  props: {
    activities: Array,
  },
};
</script>
<style>
h3.month {
  background-color: cornsilk;
  padding:3px;
  padding-left: 12px !important;
  padding-right: 12px !important;
  border-radius: 12px;
  display: inline-block;
  font-size: 14px;
  font-weight: lighter;
}
</style>
