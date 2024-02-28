import axios from "axios";

import {carsBaseURL} from "../constants/urls";

const cars_api_services =axios.create({
    baseURL: carsBaseURL
})

export {cars_api_services}


