import { mount } from "@vue/test-utils";

import ActionButton from "@/components/ActionButton";

describe("ActionButton", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "I'm so clickable",
      },
    });
    expect(wrapper.text()).toMatch("I'm so clickable");
  });

  it("applies styles to BTN", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Zoumba",
        type: "secondary",
      },
    });

    const btn = wrapper.find("button");
    expect(btn.classes("secondary")).toBe(true);
  });
});
