<template>
  <div class="house-details-page">
    <h1>Welcome to the House details</h1>
    {{house.bedrooms}} - {{house.bathrooms}}-{{house.levels}}- {{house.year}} - {{house.price}}-{{house.imgUrl}}

    <button class="btn btn-danger" @click="destroy">Delete</button>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import {housesService} from '../services/HousesService'
import {useRoute, useRouter} from 'vue-router'

export default {
  setup(){
    const route = useRoute()
    const router = useRouter()
    onMounted(async()=>{
      try {
        await housesService.getHouseById(route.params.id)
      } catch (error) {
        console.error(error)
      }
    })
    return {
      house: computed(()=> AppState.activeHouse),
      async destroy(){
        try {
          await housesService.destroy(route.params.id)
          //  navigate user back to home
          router.push({name: 'Home'})
        } catch (error) {
          console.error(error)
        }
      }
    }
  }}
</script>