<template>
  <button :class="buttonClass">{{text}}</button>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["text", "isPrimary"],
  data() {
    return {
      primary: this.isPrimary,
    };
  },
  computed: {
    buttonClass() {
      return {
        primary: this.primary,
        secondary : !this.primary,
      };
    },
  },
};
</script>

<style scoped>
button {
  @apply rounded px-5 py-3 font-medium ;
}

.primary {
  @apply text-white bg-brand-blue-1 hover:shadow-blue;
}

.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2;
}

</style>
