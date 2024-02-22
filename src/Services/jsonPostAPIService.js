import axios from "axios";
import {jsonAPIService} from "./jsonAPIService";
import {urls} from "../constans/urls";

const jsonPostAPIService = {
    getAll:() => jsonAPIService.get(urls.posts)
}
export {jsonPostAPIService}