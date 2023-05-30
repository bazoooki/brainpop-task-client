<template>
  <div class="w-full space-y-4">
    <div class=" relative">
      <div class="absolute -bottom-14 right-0 text-xs" v-if="!!hiddenItemsId.length">
        <button @click="clearHidden" class="icon-btn text-xxs text-primary m-2">
          clear {{ hiddenItemsId.length }} hidden items
        </button>
      </div>
    </div>
    <template v-for="(group, month) in groupedActivitiesByMonth">
      <div :key="month"
           class="bg-yellow-200 inline-block py-1 rounded-xl bg-opacity-25 text-xs font-light text-gray-600 px-3 relative w-20 text-center">
        <span>{{ month }} </span>
        <div class="dec-connector w-0.5 h-4 bg-gray-300 absolute left-10 first:hidden -top-4"></div>
      </div>
      <template v-for="activity in group">
        <StudentActivityListItem
          v-if="!!!activity.hidden" @hideActivity="handledActivityHide"
          v-on="$listeners"
          :activity="activity" :key="activity.id"
        />
      </template>
    </template>

  </div>

</template>

<script>

import {groupByKey} from '../utils/utils'
import StudentActivityListItem from "@/components/StudentsActivityListItem.vue";
import {mapActions} from "vuex";

export default {
  name: 'StudentsActivityList',
  components: {StudentActivityListItem},
  data() {
    return {
      hiddenItemsId: []
    }
  },
  methods: {
    ...mapActions(['hideActivity', 'clearHiddenActivities']),
    clearHidden() {
      this.hiddenItemsId = []
      localStorage.setItem("activityStoreHiddenRows", []);
      this.clearHiddenActivities()
    },
    handledActivityHide(activityId) {
      this.hideActivity(activityId)
      if (this.hiddenItemsId.includes(activityId)) {
        this.hiddenItemsId = this.hiddenItemsId.filter(item => item !== activityId)
      } else {
        this.hiddenItemsId.push(activityId)
      }

    },

  },
  mounted() {
    const arr = localStorage.getItem("activityStoreHiddenRows") || []
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
      })
        .filter(item => !this.hiddenItemsId.includes(item.id))
        .sort((a, b) => (new Date(b.d_created * 1000)) - new Date(a.d_created * 1000))
      return groupByKey(list, "created_month")
    }
  },
  props: {
    activities: Array,
  },
};
</script>
