import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  function renderMainNav() {
    const wrapper = mount(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });
    return wrapper;
  }
  it("displays company name", () => {
    let wrapper = renderMainNav();
    expect(wrapper.text()).toContain("Bobo carreers");
  });

  it("Display menu items for navigation", () => {
    let wrapper = renderMainNav();
    const items = wrapper.findAll("[data-test='main-nav-list-item666']");
    const texts = items.map((item) => item.text());
    expect(texts).toEqual(["Teams", "Sites", "Life@", "WeHire", "Std", "Jobs"]);
  });

  describe("When user is logged in", () => {
    it("displays user profile", () => {
      let wrapper = renderMainNav();
      const loginBtn = wrapper.find("[data-test='login-button']");
      expect(loginBtn.exists()).toBe(true);
    });
  });

  describe("When user is logged out", () => {
    it("prompts user to sign in", async () => {
      let wrapper = renderMainNav();
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
});
