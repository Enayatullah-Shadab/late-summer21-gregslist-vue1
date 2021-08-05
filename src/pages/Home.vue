<template>
  <div class="home container-fluid">
      <div class="row">
      <div class="col">
        <JobForm />
      </div>
    </div>
    <div class="row">
      <div class="col-4" v-for="j in jobs" :key="j.id">
        <!-- Data passed through prop ':job' to child -->
        <JobCard :job="j"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed,  } from '@vue/runtime-core'
import {AppState} from '../AppState.js'
import {jobsService} from '../services/JobsService.js'
import JobCard from '../components/JobCard.vue'
import JobForm from '../components/JobForm.vue'

export default {
  name: 'Home',
  setup(){
    // state
    onMounted(async ()=>{
      try {
        await jobsService.getJobs()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      // state,
      // computeds
      jobs: computed(() => AppState.jobs)
      // methods
    }
  },
  components: {
    JobCard,
    JobForm
  }
}
</script>
