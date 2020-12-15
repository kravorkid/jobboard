<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10 col-lg-7">
        <q-chip icon="keyboard_arrow_left" label="Back to list" clickable @click="$router.push('/')"/>
        <ErrorCard :error="error" />
        <h1 class="text-h5 text-bold">{{job.title}}</h1>
        <div v-html="job.description"></div>
      </div>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  components: {
    ErrorCard: () => import('components/ErrorCard.vue')
  },
  props: ['id'],
  data: () => ({
    job: {},
    error: false
  }),
  async created () {
    this.getJob()
  },
  methods: {
    async getJob () {
      this.$q.loading.show()
      const res = await this.$axios.get(`http://localhost:5000/jobs/${this.id}`)
        .catch(e => {
          this.error = true
          this.$q.loading.hide()
        })
      this.job = res.data
      this.$q.loading.hide()
    }
  }

}

</script>
