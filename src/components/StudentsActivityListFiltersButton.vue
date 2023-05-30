<template>
  <button class="filter-btn" @click="onClick" :class="[selected ? 'active' : '']">
    {{ value | capitalize }}
  </button>

</template>

<script>


export default {
  name: 'StudentsActivityListFiltersButton',
  methods: {
    onClick() {
      this.$emit('toggleSelect', this.value)
    }
  },
  filters: {
    capitalize: function (str) {
      if (!str) return ''
      return str.trim().split(/\s+/).map(function (str) {
        return str.replace(/_/g, ' ').replace(/\s+/, ' ').trim();
      }).join(' ').toLowerCase().replace(/^./, function (m) {
        return m.toUpperCase();
      });
    }
  },
  props: {
    value: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      required: true,
    }
  }
}
</script>

<style scoped>
.filter-btn {
  border: 1px solid #0f766e;
  cursor: pointer;
  color: #0f766e;
  font-weight: bolder;
  font-size: 12px;
  margin: 0px 8px 0px 0px;
  border-radius: 3px;
  padding: 5px 7px;
  background: white;
  text-transform: capitalize;
}

.check-sign {
  color: #0f766e;
}

.filter-btn.active, .filter-btn:hover {
  background: rgba(72, 209, 204, 0.12);
}
</style>
