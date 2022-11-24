import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Bobo carreers");
  });

  it("Display menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const items = wrapper.findAll("li");
    const texts = items.map((item) => item.text());
    expect(texts).toEqual(["Teams", "Sites", "Life@", "WeHire", "Std", "Jobs"]);
    console.log(texts);
  });

  // await wrapper.setData({ company: "Super Corp" }); // Test trop intrusif. Avec async devant les () =>
  /*
    const wrapper = mount(MainNav, {
      data() {
        return { company: "Super Corp" };
      },
    });*/
  //console.log(wrapper.html()); // Show HTML content
  //console.log(wrapper.text()); // Show text renderer
  // expect(wrapper.text()).toMatch("Bobo carreers"); // Bien
});
