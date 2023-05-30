<template>
  <div :style="{fontSize: !small ? '15px' : '11px'}">
    {{ formattedDate }}
  </div>
</template>

<script>

export default {
  name: 'DateTime',
  props: {
    date: {

      required: true,
      type: Date,
    },
    small: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },
  computed: {
    formattedDate() {
      const created_month = new Intl
        .DateTimeFormat('en-US',
          {
            month: 'long'
          })
        .format(this.date)
      const hours = this.date.getHours()
      const minutes = this.date.getMinutes()
      const time = `${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${hours >= 12 ? 'pm' : 'am'}`
      return `${created_month.slice(0, 3)} ${this.date.getDate()}, ${this.date.getFullYear()} •  ${time}`
    }
  }
}
</script>

<style scoped>
</style>
