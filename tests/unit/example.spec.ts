import { shallowMount, mount } from "@vue/test-utils";
import AppBar from "@/components/AppBar.vue";

describe("HelloWorld.vue", () => {
  it("renders props.title when passed", () => {
    const title = "Page Title";
    const wrapper = mount(AppBar, { 
      props: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
