<template>
  <q-layout >
    <q-ajax-bar
      ref="bar"
      position="bottom"
      color="accent"
      size="10px"
      skip-hijack
    />
    <Header />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  components: {
    Header: () => import('components/Header')
  }
}
</script>
<style lang="scss">
.lateral-nav {
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
}
</style>
