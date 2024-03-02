import {apiService} from "./api.service";
import {urls} from "../constants/urls";
const postService = {
    getAll:()=>apiService.get(urls.posts.base),
    getById:(id)=>apiService.get(urls.posts.byId(id)),
    getByUserId:(userId) => apiService.get(urls.posts.byUserId(userId))
}
export {postService}