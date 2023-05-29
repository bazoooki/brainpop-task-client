<template>
  <div :style="iconWrapper">
    <img
      v-if="imageName"
      :alt="topicData.name"
      :width="size"
      :height="size"
      :src="require(`../assets/topics/${imageName}`)"
    />
    <div v-if="junior" :style="iconJunior">
      <span>Jr.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivityTopicIcon',
  props: {
    junior: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    size: {
      type: Number,
      required: false,
      default: () => 30,
    },
    topicData: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      iconJunior: {
        position: 'absolute',
        bottom: 0,
        transform: 'translate(25%, 25%)',
        right: 0,
        width: this.size / 2 + 'px',
        height: this.size / 2 + 'px',
        lineHeight: this.size / 2 + 'px',
        borderRadius: '100%',
        fontSize: this.size / 3 + 'px',
        fontWeight: 'bold',
        background: '#fbbf24',
      },
      iconWrapper: {
        backgroundColor: !!this.junior ? '#FFA500' : '#48D1CC',
        position: 'relative',
        padding: '6px',
        borderRadius: '100%',
        width: this.size + 'px',
        height: this.size + 'px',
      }
    }
  },
  computed: {
    imageName() {
      return this.topicData.icon_path.split("/assets/topics/")[1] || false
    }
  }
};
</script>
