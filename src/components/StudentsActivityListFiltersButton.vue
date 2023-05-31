<template>
  <button class="border border-primary-bold font-medium
          rounded p-1.5 leading-none mr-2 text-xs  capitalize"
          @click="onClick"
          :class="[selected ? 'bg-primary-lighter bg-opacity-20' : '']"
  >
    <span class="text-primary">{{ value | capitalize }}</span>
  </button>

</template>

<script>

export default {
  name: 'StudentsActivityListFiltersButton',
  methods: {
    onClick() {
      this.$emit('toggleSelect', this.value);
    },
  },
  filters: {
    capitalize(str) {
      if (!str) return '';
      return str.trim().split(/\s+/).map((s) => s.replace(/_/g, ' ').replace(/\s+/, ' ').trim()).join(' ')
        .toLowerCase()
        .replace(/^./, (m) => m.toUpperCase());
    },
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
