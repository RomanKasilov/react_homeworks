import {cars_api_services} from "./cars_api_services";
import {urls} from "../constants/urls";


const car_service ={
    getAll:()=> cars_api_services.get(urls.cars.base),
    create:(car)=> cars_api_services.post(urls.cars.base, car),
    updateById:(id, data) =>cars_api_services.put(urls.cars.byId(id), data),
    deleteById:(id)=>cars_api_services.delete(urls.cars.byId(id))
}

export {car_service}