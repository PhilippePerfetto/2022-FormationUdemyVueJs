import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Bobo carreers");
  });

  it("Display menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const items = wrapper.findAll("[data-test='main-nav-list-item666']");
    const texts = items.map((item) => item.text());
    expect(texts).toEqual(["Teams", "Sites", "Life@", "WeHire", "Std", "Jobs"]);
  });
  
  describe("When user is logged in", () => {
    it("displays user profile", () => {
      const wrapper = mount(MainNav);
      const loginBtn = wrapper.find("[data-test='login-button']");
      expect(loginBtn.exists()).toBe(true);
    });
  });

  describe("When user is logged out", () => {
    it("prompts user to sign in", async () => {
      const wrapper = mount(MainNav);
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      let loginBtn = wrapper.find("[data-test='login-button']");
      await loginBtn.trigger("click");

      loginBtn = wrapper.find("[data-test='login-button']");
      expect(loginBtn.exists()).toBe(false);

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });
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
