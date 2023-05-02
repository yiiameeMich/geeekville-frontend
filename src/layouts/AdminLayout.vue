<template>
<div>
  <AdminHeaderComponent />
  <v-main app class="fill-height" style="height: 100%;">
    <transition name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
  </v-main>
</div>
</template>

<script>
import AdminHeaderComponent from "@/components/AdminHeaderComponent.vue";

export default {
  name: "AdminLayout",
  components: {AdminHeaderComponent}
}
</script>

<style scoped>

</style>