import {spaceXAPIService} from "./spaceXAPIService";
import {urls} from "../constans/urls";

const spaceXLaunchesService ={
    getAll:()=>spaceXAPIService.get(urls.launches)
}
export {spaceXLaunchesService}