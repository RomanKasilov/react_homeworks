import {apiService} from "./api.service";
import {urls} from "../constants/urls";

const commentService = {
    getByPostId:(postId)=>apiService.get(urls.comments.byPostId(postId))
}
export {commentService}