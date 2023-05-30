<template>
  <div :style="{position: 'relative'}">
    <div class="clear-hidden-items" v-if="!!hiddenItemsId.length">
      <button @click="clearHidden" class="icon-btn">clear {{hiddenItemsId.length }} hidden items</button>
    </div>
    <template v-for="(group, month) in groupedActivitiesByMonth">
      <div :key="month" class="month-title">{{ month }}</div>
      <template v-for="activity in group">
        <StudentActivityListItem @toggleVisible="toggleVisible" v-on="$listeners" :activity="activity" :key="activity.id"/>
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
  data() {
    return {
      hiddenItemsId: []
    }
  },
  methods: {
    clearHidden () {
      this.hiddenItemsId = []
      this.updateLocalStorage([])
    },
    toggleVisible(activityId) {
      if (this.hiddenItemsId.includes(activityId) ) {
        this.hiddenItemsId = this.hiddenItemsId.filter(item=>item !== activityId)
      } else {
        this.hiddenItemsId.push(activityId)
      }

      this.updateLocalStorage(this.hiddenItemsId)
    },
    updateLocalStorage (val) {
      localStorage.setItem("studentActivitiesHiddenRows", JSON.stringify(val));
    }
  },
  mounted() {
    const arr = localStorage.getItem("studentActivitiesHiddenRows") || []
    const hiddenRows = !!arr.length ? JSON.parse(arr) : []
    this.hiddenItemsId = [...hiddenRows]
  },
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
      }).filter(item=>!this.hiddenItemsId.includes(item.id));
      return groupByKey(list, "created_month")
    }
  },
  props: {
    activities: Array,
  },
};
</script>
<style>
.clear-hidden-items {
  width: 100%;
  position: absolute;
  font-size: 11px;
  top:20px;
  text-align: right;
}
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
