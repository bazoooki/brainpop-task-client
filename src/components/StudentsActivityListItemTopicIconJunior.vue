<template>
  <div class="icon-wrapper">
    <img v-if="imageName" :alt="topicData.name" width="30" height="30" :src="require(`../assets/topics/${imageName}`)" />
    <div class="icon-junior">
      <span>Jr.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentsActivityListItemTopicIconJunior',
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
  background: #FFA500;
  height: 30px;
  border-radius: 100%;
  padding: 3px;
  position: relative;
}
.icon-junior {
  position: absolute;
  bottom: 7px;
  transform: translate(50%, 50%);
  right: 5px;
  width: 15px;
  height: 15px;
  line-height: 15px;
  border-radius: 100%;
  font-size: 10px;
  font-weight: bold;
  background: #fbbf24;
}
</style>
