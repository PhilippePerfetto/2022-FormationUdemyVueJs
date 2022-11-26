<template>
  <header class="w_full text-sm">Main Nav</header>
  <div class="fixed top-0 left-0 w-full h-16 bg-white">
    <div class="flex flex-nowrap h-full px-8 mx-auto">
      <!-- v-bind:href is written :href -->
      <a :href="url" class="flex items-center h-full text-xl">{{ company }}</a>

      <nav class="h-full ml-12">
        <ul class="flex h-full p-0 m-0 list-none">
          <li
            v-for="menuItem in menuItems"
            :key="menuItem"
            class="h-full ml-9 first:ml-0"
            data-test="main-nav-list-item666"
          >
            <a href="" class="flex items-center h-full py-2.5">{{ menuItem }}</a>
          </li>
        </ul>
      </nav>

      <div class="flex items-center h-full ml-auto">
        <ProfileImage v-if="isLoggedIn" data-test="profile-image"></ProfileImage>
        <ActionButton v-else text="Sign in" :isPrimary="true" data-test="login-button" @click="loginUser"></ActionButton>
      </div>
    </div>
    <hr class="line" />
  </div>
  <!--<div class="w_full border-b border-solid border-brand-gray-1">.</div>-->
  <!--<div class="line">.</div>-->
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
  },
  data() {
    return {
      company: "Bobo carreers",
      url: "https://careers.google.com",
      menuItems: ["Teams", "Sites", "Life@", "WeHire", "Std", "Jobs"],
      isLoggedIn: false,
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = !this.isLoggedIn;

    }
  },
};
</script>
