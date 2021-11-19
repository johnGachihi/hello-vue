import { shallowMount } from "@vue/test-utils";
import AppBar from "@/components/AppBar.vue";

describe("HelloWorld.vue", () => {
  it("renders props.title when passed", () => {
    const title = "Page Title";
    const wrapper = shallowMount(AppBar, {
      props: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
