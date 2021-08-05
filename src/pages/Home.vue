<template>
  <div class="home container-fluid">
      <div class="row">
      <div class="col">
        <JobForm />
        <HouseForm />
      </div>
    </div>
    <div class="row">
      <div class="col-4" v-for="j in jobs" :key="j.id">
        <!-- Data passed through prop ':job' to child -->
        <JobCard :job="j"/>
        <HouseCard :house="h"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import {AppState} from '../AppState.js'
import {jobsService} from '../services/JobsService.js'
import {housesService} from '../services/HousesService.js'
import JobCard from '../components/JobCard.vue'
import JobForm from '../components/JobForm.vue'
import HouseCard from '../components/HouseCard.vue'
import HouseForm from '../components/HouseForm.vue'

export default {
  name: 'Home',
  setup(){
    // state
    onMounted(async ()=>{
      try {
        await jobsService.getJobs()
        await housesService.getHouses()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      // state,
      // computeds
      jobs: computed(() => AppState.jobs)
      houses:computed(() => AppState.houses)
      // methods
    }
  },
  components: {
    JobCard,
    JobForm,
    HouseCard,
    HouseForm
  }
}
</script>
