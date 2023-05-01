<template>
  <div class="loader">
    <img :src="imageSrc" alt="Loader" class="loader-image">
  </div>
</template>

<script>
export default {
  name: "LoaderComponent",
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
  }
}
</script>

<style scoped lang="scss">
.loader {
  border-radius: 50%;
  width: 120px;
  height: 80px;
  animation: spin 2s infinite;
  margin: 0 auto;

  &-image {
    width: 100%;
    height: 100%;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>