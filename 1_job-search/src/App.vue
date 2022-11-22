<template>
  <div>
    <MainNav> </MainNav>
    <TutuEnSlip />
    <main-nav />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";

export default {
  name: "App",
  components: {
    MainNav: MainNav,
  },
};
</script>
