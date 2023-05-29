<template>
  <div class="autocomplete">
    <div class="search-input">
      <input
        type="text"
        @input="onChange"
        placeholder="Search Activities"
        v-model="search"
        @keydown.down="onArrowDown"
        @keydown.up="onArrowUp"
        @keydown.enter="onEnter"
      />
      <button></button>
    </div>
    <ul
      id="autocomplete-results"
      v-show="isOpen"
      class="autocomplete-results"
    >
      <li
        class="loading"
        v-if="isLoading"
      >
        Loading results...
      </li>
      <li
        v-else
        v-for="(result, i) in results"
        :key="i"
        @click="setResult(result)"
        class="autocomplete-result text-xs"
        :class="{ 'is-active': i === arrowCounter }"
      >
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchAutocomplete',
  props: {
    suggestions: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      isOpen: false,
      results: [],
      search: '',
      isLoading: false,
      arrowCounter: -1,
    };
  },
  watch: {
    suggestions: function (value, oldValue) {
      if (value.length !== oldValue.length) {
        this.results = value;
        this.isLoading = false;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    setResult(result) {
      this.search = result;
      this.isOpen = false;
    },
    filterResults() {
      this.results = this.suggestions.filter((item) => {
        const a = item.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
        return a
      });
    },
    onChange() {
      this.$emit('input', this.search);

      this.filterResults();
      this.isOpen = true;
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    },
    onArrowDown() {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
    onEnter() {
      this.search = this.results[this.arrowCounter];
      this.isOpen = false;
      this.arrowCounter = -1;
    },
  },
};
</script>

<style scoped>
.autocomplete {
  position: relative;

  display: inline-block;
  width: 350px;
}
.autocomplete .search-input {
  display: flex;
  justify-items: center;
}
.autocomplete input {
  width: 300px;
  text-indent: 5px;
  border: 1px solid #ccc;;
  border-right: 0px;
  border-radius: 3px 0px 0px 3px;
  text: 16px;
}
.autocomplete button  {
  width: 30px;
  border: none;
  background: #0f766e;
  border:1px solid #047857;
  border-left: 0px;
  border-radius: 0px 3px 3px 0;
  height: 30px;
  position: relative;
  display: inline-block;
}

.autocomplete-results {
  border: 2px solid #eeeeee;
  padding: 2px;
  margin: 0;
  height: 120px;
  overflow: auto;
  position: absolute;
  background: white;
  left: 0;
  right: 0;

}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  background-color: #4AAE9B;
  color: white;
}
</style>