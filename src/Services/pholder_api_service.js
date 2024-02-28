import axios from "axios";

import {p_holderBaseURL} from "../constants/urls";


const p_holder_api_service = axios.create({baseURL:p_holderBaseURL});

export {p_holder_api_service}