<template>
  <v-app id="app">
    <router-view />
  </v-app>
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
  background-color: var(--dark) !important;
  height: 100% !important;
}

.v-application {
  display: block !important;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
}

:root {
  --dark: #090403;
  --light: #d9c79d;
  --grey: #636363;
  --low-light: rgba(217, 199, 157, 0.6);
  --low-dark: rgba(9, 4, 3, 0.4);
  --graffity: 'Sedgwick Ave Display', cursive;
  --satisfy: 'Satisfy', cursive;
  --strong: 'Bruno Ace', cursive;
}
</style>
