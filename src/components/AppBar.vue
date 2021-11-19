<template>
  <div class="root">
    <h2 class="title">{{ title }}</h2>
    <nav>
      <a v-for="link in links" :href="link.href" :key="link.href">
        {{ link.label }}
      </a>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "AppBar",
  props: {
    title: String,
    links: {
      type: Array as PropType<
        {
          label: string;
          href: string;
        }[]
      >,
    },
  },
});
</script>

<style scoped lang="scss">
.root {
  height: 70px;
  background-color: rgb(10, 10, 10);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
}

.title {
  color: white;
  margin: 0;
}

nav {
  color: white;

  & > a {
    color: white;
    text-decoration: none;
    padding-left: 16px;
    padding-right: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
