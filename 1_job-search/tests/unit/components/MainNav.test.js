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
    console.log(items);
    const texts = items.map((item) => item.text());
    expect(texts).toEqual(["Teams", "Sites", "Life@", "WeHire", "Std", "Jobs"]);
    console.log(texts);
  });

  describe("When user is logged out", () => {
    it("prompts user to sign in", () => {
      const wrapper = mount(MainNav, {
        data() {
          return {
            isLoggedIn: false,
          }
        }
      });
      const loginBtn = wrapper.find("[data-test='login-button']");
      const profileImage = wrapper.find("[data-test='profile-image']");
      expect(loginBtn.exists()).toBe(true);
      expect(profileImage.exists()).toBe(false);
    });
  });
  
  describe("When user is logged in", () => {
    it("displays user profile", () => {
      const wrapper = mount(MainNav, {
        data() {
          return {
            isLoggedIn: true,
          }
        }
      });
      const loginBtn = wrapper.find("[data-test='login-button']");
      const profileImage = wrapper.find("[data-test='profile-image']");
      expect(loginBtn.exists()).toBe(false);
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
