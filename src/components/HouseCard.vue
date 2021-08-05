<template>
     <div class="house m-2 bg-light shadow">
        <!-- passing required param ':id' -->
        <router-link :to="{name: 'HouseDetails', params: {id: house.id}}">
          <div class="p-3">
              <div class="text-center">
                  <p><b> {{house.bedrooms}} - {{house.bathrooms}}-{{house.levels}}- {{house.year}} - {{house.price}}-{{house.imgUrl}}</b></p>
              </div>
          </div>
        </router-link>
      </div>
</template>

<script>
export default {
    props: {
        house: {
            type: Object,
            required: true
        }
         },
    setup() {
          return{}
    },
}
</script>