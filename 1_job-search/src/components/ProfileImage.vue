<template>
  <img :src="imageLink" class="w-8 h-8 object-contain rounded-3xl" alt="profile image" />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink: "resources/toon.png",
    };
  },
};
</script>

<styles>

</styles>
