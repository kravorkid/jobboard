<template>
  <q-card class="job-card q-mb-md" @click="$router.push(`/${job.id}`)">
    <q-card-section>
      <div class="row">
        <div class="col-auto">
          <q-avatar class="job-img q-mr-md" size="50px" rounded>
            <img :src="job.company_logo" :alt="job.company" class="img-fluid">
          </q-avatar>
        </div>
        <div class="col">
          <p class="text-h6 text-bold q-mb-xs">{{job.title}}</p>
          <a class="text-gray" :href="job.company_url"><span>{{job.company}}</span></a>
          <div>
            <q-chip square size="sm" icon="timer" class="q-ml-none q-mr-md">{{job.type}}</q-chip>
            <q-chip square size="sm" icon="location_on" class="q-ma-none">{{job.location}}</q-chip>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  name: '',
  props: {
    job: {
      type: Object,
      default: () => ({
        company_logo: 'image url',
        title: 'Job Title',
        type: 'Full time',
        location: 'City'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.job-card {
  transition: box-shadow 0.3s;
  box-shadow: 0px 2px 5px rgba(75, 98, 244, 0.1);
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 2px 10px rgba(75, 98, 244, 0.15);
  }
}

.job-img {
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1)
}
</style>
