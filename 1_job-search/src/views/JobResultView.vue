<template>
  <h1 class="text-6xl font-bold">Job Result View</h1>
  <button @click="goToHome">Go to Home Page</button>
</template>

<script>
export default {
  name: "JobResultView",
  computed: {
    experiment() {
      console.log(this.$route);
      return "Irrelevant";
    },
  },
  methods: {
    goToHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
