<template>
  <div>
    <template v-for="(group, month) in groupedActivitiesByMonth">
      <div :key="month" class="month-title">{{ month }}</div>
      <template v-for="activity in group">
        <StudentActivityListItem v-on="$listeners" :activity="activity" :key="activity.id"/>
      </template>
    </template>
  </div>

</template>

<script>

import {groupByKey} from '../utils/utils'
import StudentActivityListItem from "@/components/StudentsActivityListItem.vue";

export default {
  name: 'StudentsActivityList',
  components: {StudentActivityListItem},
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
.month-title {
  background-color: cornsilk;
  margin-top: 1rem;
  padding: 0px 12px;
  border-radius: 12px;
  display: inline-block;
  font-size: 14px;
  font-weight: lighter;
}
</style>
