<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
html, body {
  height: 100%;
}

#app {
  background-color: var(--dark);
  height: 100%;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
}

:root {
  --dark: #090403;
  --light: #d9c79d;
  --low-light: rgba(217, 199, 157, 0.6);
  --low-dark: rgba(9, 4, 3, 0.4);
  --graffity: 'Sedgwick Ave Display', cursive;
  --satisfy: 'Satisfy', cursive;
  --strong: 'Bruno Ace', cursive;
}
</style>
