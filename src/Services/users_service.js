import {p_holder_api_service} from "./p_holder_api_service";
import {urls} from "../constants/urls";

const users_service = {
    getAll:() => p_holder_api_service.get(urls.users),
    create: (user) => p_holder_api_service.post(urls.users, user)
}
export {users_service}