<template>
  <div class="root">
    <input v-model="username" />
    <button @click="onClickGo">Go</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchBar",
  props: {
    onSearch: {
      type: Function,
      required: true,
    },
  },
  data() {
    return { username: "" };
  },
  methods: {
    onClickGo() {
      this.onSearch(this.username);
    },
  },
});
</script>

<style scoped lang="scss">
.root {
  display: flex;
  align-items: center;
}

input {
  width: 250px;
  height: 30px;
  border-radius: 17px;
  padding-left: 10px;
  font-size: 16px;
}

button {
  height: 30px;
  margin-left: 8px;
  background-color: black;
  color: white;
  border: none;
  width: 50px;
  border-radius: 5px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  box-shadow: 1px 3px 6px -2px rgb(0 0 0 / 61%);

  &:hover {
    box-shadow: 1px 3px 6px 0px rgb(0 0 0 / 61%);
  }

  transition: box-shadow 100ms;
}
</style>
