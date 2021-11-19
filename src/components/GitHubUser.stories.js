import GitHubUser from "./GitHubUser.vue";
import mockGitHubUser from "@/mock/data/user.json";

export default {
  title: "GitHubUser",
  component: GitHubUser,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { GitHubUser },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<git-hub-user v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  gitHubUser: mockGitHubUser,
};
