import axios from "axios";
import {apiSpaceBaseUrl} from "../constans/urls";

const spaceXAPIService = axios.create(
    {
        baseURL:apiSpaceBaseUrl
    }
)
export {spaceXAPIService}