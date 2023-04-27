<template>
  <div style="height: 100%">
    <HeaderComponent />
    <v-main app class="fill-height">
      <transition name="fade" mode="out-in" appear>
        <router-view></router-view>
      </transition>
    </v-main>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "DefaultLayout",
  components: {HeaderComponent}
}
</script>