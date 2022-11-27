<template>
  <button :class="buttonClass">{{text}}</button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
        text: { type: String, required: true, },
        type: { type: String, required: false, default: "primary", 
        validator(value) {
            return ["primary", "secondary", "terciary"].includes(value);
          } 
        },
      },
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
        /*primary: this.type === "primary",
        secondary : this.type === "secondary",
        terciary : this.type === "terciary",*/
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
.terciary {
  @apply text-green-700 bg-green-300 hover:bg-brand-green-1;
}

</style>
