<template>
  <div :class="$style.wrapper">
    <input type="text" v-model="input" :class="$style.input" @keyup.enter="onSearch" spellcheck="false">
    <svg aria-hidden="true" :class="$style.search" @click="onSearch">
      <use xlink:href="#icon-icon_search"></use>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  },
  methods: {
    onSearch() {
      this.$emit('search', { name: this.input })
    }
  }

}
</script>

<style module lang="postcss">
.wrapper {
  position: relative;
  overflow: hidden;
}
.input {
  display: block;
  width: 100%;
  height: 1.5em;
  border: solid 1px rgb(137, 137, 137);
  font-size: 26px;
}
.search {
  position: absolute;
  top: 0;
  right: 0;
  width: 2.5em;
  height: 2.5em;
  fill: rgb(137, 137, 137);
}
.search:hover {
  fill: rgb(126, 149, 192);
}
</style>
