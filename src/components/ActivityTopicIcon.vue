<template>
  <div :style="iconWrapper">
    <img
      :alt="topicData.name"
      :width="size"
      :height="size"
      :src="topicData.iconPath"
    />
    <div v-if="junior" :style="iconJunior">
      <span class="text-xxs p-1 leading-none">Jr.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivityTopicIcon',
  props: {
    iconPath: {
      type: String,
    },
    name: {
      type: String,
    },
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
    },
  },
  data() {
    return {
      iconJunior: {
        position: 'absolute',
        bottom: 0,
        transform: 'translate(25%, 25%)',
        right: 0,
        width: `${this.size / 2}px`,
        height: `${this.size / 2}px`,
        lineHeight: `${this.size / 2}px`,
        borderRadius: '100%',
        fontWeight: 'bold',
        background: '#fbbf24',
      },
      iconWrapper: {
        backgroundColor: this.junior ? '#FFA500' : '#48D1CC',
        position: 'relative',
        padding: '3px',
        borderRadius: '100%',
        width: `${this.size}px`,
        height: `${this.size}px`,
      },
    };
  },
};
</script>
