<template>
    <div class="house-form">
        <form class="d-flex" @submit.prevent="createHouse">
        <div class="form-group">
        <label for="bedrooms">Bedrooms</label>
        <input type="text" name="bedrooms" v-model="state.newHouse.bedrooms" class="form-control" placeholder="Bedrooms..." required/>
      </div>
       <div class="form-group">
        <label for="bathrooms">Bathrooms</label>
        <input type="text" name="bathrooms"
        v-model="state.newHouse.bathrooms"
        class="form-control"
        placeholder="Bathrooms..." required/>
      </div>
       <div class="form-group">
        <label for="levels">Levels</label>
        <input type="text" name="levels"
        v-model="state.newHouse.levels"
        class="form-control"
        placeholder="Levels..." required/>
      </div>
        <div class="form-group">
        <label for="year">Year</label>
        <input type="text" name="year"
        v-model="state.newHouse.year"
        class="form-control"
        placeholder="Year..." required/>
      </div>
        <div class="form-group">
        <label for="price">Price</label>
        <input type="text" name="price"
        v-model="state.newHouse.price"
        class="form-control"
        placeholder="Price..." required/>
      </div>
       <div class="form-group">
        <label for="imgUrl">Image</label>
        <input type="text" name="imgUrl"
        v-model="state.newHouse.imgUrl"
        class="form-control"
        placeholder="ImageUrl..." required/>
      </div>
            <div class="d-flex align-items-center">
        <button type="submit" class="btn btn-outline-success">Add</button>
      </div>
        </form>
    </div>
</template>

<script>

import { reactive } from '@vue/reactivity'
import { housesService } from '../services/HousesService.js'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const state = reactive({
      newHouse: {}
    })
    return {
      state,
      async createHouse(){
        try {
          const newId = await housesService.createHouse(state.newHouse)
          // NOTE clears the form
          state.newHouse = {}
          router.push({name: 'HouseDetails', params: {id: newId}})
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
}
</script>