<template>
  <app-bar
    title="Welcome to Your Vue.js + TypeScript App"
    :links="[
      { label: 'Home', href: '#' },
      { label: 'About Us', href: '#' },
      { label: 'Contact Us', href: '#' },
    ]"
  />
  <main>
    <SearchBar :on-search="loadUser" />
    <GitHubUser v-if="user" :git-hub-user="user" />

    <img src="@/assets/logo.png" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppBar from "@/components/AppBar.vue";
import SearchBar from "@/components/SearchBar.vue";
import GitHubUser, { GitHubUserType } from "@/components/GitHubUser.vue";
import mockUser from "@/mock/data/user.json";
import { sleep } from "@/utils";

export default defineComponent({
  name: "UserReposPage",
  components: { "app-bar": AppBar, SearchBar, GitHubUser },
  data() {
    return {
      user: null as null | GitHubUserType,
      userRepos: null as null | string[],
    };
  },
  methods: {
    loadUser(user: string) {
      sleep(1000).then(() => {
        this.user = mockUser;
        console.log(mockUser);
      });
    },

    loadUserRepos(user: string) {
      this.userRepos = ["a", "b"];
      console.log(user);
    },
  },
});
</script>

<style lang="scss">
main {
  margin-top: 24px;
  padding-left: 8px;
  padding-right: 8px;
}
</style>
