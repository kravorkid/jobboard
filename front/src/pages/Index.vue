<template>
  <q-page class="q-pa-md">
    <div class="row q-gutter-md q-mt-md q-px-md justify-center">
      <div class="col-12 col-md-3 col-lg-2">
        <SignatureCard />
      </div>
      <div class="col-12 col-md-8 col-lg-5">
        <ErrorCard v-if="error" />
        <JobCard v-for="job in jobs" :key="job.id" :job="job" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  components: {
    SignatureCard: () => import('components/SignatureCard.vue'),
    ErrorCard: () => import('components/ErrorCard.vue'),
    JobCard: () => import('components/JobCard.vue')
  },
  data: () => ({
    jobs: [],
    error: false
  }),
  created () {
    this.getJobs()
  },
  methods: {
    async getJobs () {
      this.$q.loading.show()
      const res = await this.$axios.get('/jobs')
        .catch(e => {
          this.error = true
          this.$q.loading.hide()
        })
      this.jobs = this.sortByCompanyName(res.data)
      this.$q.loading.hide()
    },
    sortByCompanyName (arr) {
      return arr.sort((a, b) => a.company.localeCompare(b.company))
    }
  }
}

</script>
<style lang="scss">
a {
  text-decoration: none;
  color: gray
}

.img-fluid {
  max-width: 100%;
}
</style>
