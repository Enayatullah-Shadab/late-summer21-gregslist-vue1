<template>
     <div class="job m-2 bg-light shadow">
        <!-- passing required param ':id' -->
        <router-link :to="{name: 'JobDetails', params: {id: job.id}}">
          <img :src="job.imgUrl" class="w-100" :alt="job.make">
          <div class="p-3">
              <div class="text-center">
                  <p><b>{{job.position}} - {{job.location}}</b></p>
              </div>
          </div>
        </router-link>
      </div>
</template>


<script>

export default {
    props: {
        job: {
            type: Object,
            required: true
        }
    },

    setup() {
          return{}
    },
}
</script>

<style scoped>

</style>

