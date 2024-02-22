import axios from "axios";
import {jsonBaseUrl} from "../constans/urls";

const jsonAPIService = axios.create({
    baseURL:jsonBaseUrl
})
export {jsonAPIService}