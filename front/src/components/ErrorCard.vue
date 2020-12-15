<template>
  <q-card class="bg-red-1 no-shadow" v-if="error">
    <q-card-section class="text-red">
      <p>Error during loading check your connection or try refresh the page right here:</p>
      <q-btn color="green" unelevated no-caps @click="$router.go()">Refresh</q-btn>
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  name: '',
  props: {
    error: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
