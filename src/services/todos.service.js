import {apiService} from "./api.service";
import {urls} from "../constans/urls";

const todosService = {
    getAll:() => apiService.get(urls.todos)
}
export {todosService}