import {apiService} from "./api.service";
import {urls} from "../constans/urls";

const commentsService = {
    getAll:() => apiService.get(urls.comments)
}
export {commentsService}