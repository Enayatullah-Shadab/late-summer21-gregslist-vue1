import { AppState } from "../AppState.js"
import { sandbox } from "./AxiosService.js"


class HousesService{

  async getHouses(){
      let res= await sandbox.get("/houses")
      AppState.houses=res.data
    }
  async getHousesById(){
    let res= await sandbox.get('/houses/${id}')
    AppState.activeHouse=res.data
    }


}
export const housesService= new HousesService()