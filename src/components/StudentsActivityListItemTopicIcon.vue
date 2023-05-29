<template>
  <div class="icon-wrapper">
    <img v-if="imageName" :alt="topicData.name" width="30" height="30" :src="require(`../assets/topics/${imageName}`)" />
  </div>
</template>

<script>
export default {
  name: 'StudentsActivityListItemTopicIcon',
  props: {
    topicData: {
      type: Object,
      required: true,
    }
  },
  computed: {
    imageName () {
      return this.topicData.icon_path.split("/assets/topics/")[1] || false
    }
  }
};
</script>
<style scoped>
  .icon-wrapper {
    width: 30px;
    background: #48D1CC;
    height: 30px;
    border-radius: 100%;
    padding: 3px;
  }
</style>
