<template>
  <div class="root">
    <img :src="gitHubUser.avatar_url" />
    <div class="user-details">
      <h4>{{ gitHubUser.username }}</h4>
      <div>
        <span>Followers: {{ gitHubUser.followers }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export type GitHubUserType = {
  username: string;
  avatar_url: string;
  url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
};

export default defineComponent({
  name: "GitHubUser",
  props: {
    gitHubUser: {
      type: Object as PropType<GitHubUserType>,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.root {
  width: 500px;
  height: 60px;
  display: flex;

  img {
    height: 100%;
    width: auto;
  }

  .user-details {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h4 {
      margin: 0;
    }
  }
}
</style>
