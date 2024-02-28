import {p_holder_api_service} from "./p_holder_api_service";
import {urls} from "../constants/urls";

const comments_services ={
    getAll:()=>p_holder_api_service(urls.comments),
    create:(comment)=>p_holder_api_service.post(urls.comments, comment)
}
export {comments_services}