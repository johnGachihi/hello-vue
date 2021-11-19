<template>
  <user-repos-page />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserReposPage from "./pages/UserRepos.vue";

export default defineComponent({
  name: "App",
  components: {
    UserReposPage,
  },
});
</script>
