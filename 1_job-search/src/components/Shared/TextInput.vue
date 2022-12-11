<template>
  <input
    class="w-full text-lg font-normal focus:outline-none"
    type="text"
    :value="value"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "TextInput",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    handleInput($event) {
      this.value = $event.target.value;
      this.$emit("handleInput", this.value);
    },
  },
};
</script>
