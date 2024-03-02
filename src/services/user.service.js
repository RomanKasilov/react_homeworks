import {apiService} from "./api.service";
import {urls} from "../constants/urls";

const userService = {
    getAll:()=>apiService.get(urls.users.base),
    getById:(id) =>apiService.get(urls.users.byId(id))
}
export {userService}