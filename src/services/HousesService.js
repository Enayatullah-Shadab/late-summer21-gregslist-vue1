import { AppState } from "../AppState.js"
import { sandbox } from "./AxiosService.js"


class HousesService{

  async getHouses(){
      let res= await sandbox.get("/houses")
      AppState.houses=res.data
    }
  async getHousesById(){
    // @ts-ignore
    let res= await sandbox.get('/houses/${id}')
    AppState.activeHouse=res.data
    }
     async createHouses(){
         let res = await sandbox.post('/houses')
         AppState.houses.push(res.data)
         return res.data.id
    }
    async destroyHouses(id){
        // @ts-ignore
        await sandbox.delete('/houses/${id}')
        AppState.houses= AppState.houses.filter(house => house.id !==id)
    }
}
export const housesService= new HousesService()