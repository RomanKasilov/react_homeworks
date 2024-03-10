import {apiService} from "./api.service";
import {urls} from "../const";

const characterService = {
    getByIds:(ids) => apiService.get(urls.characters.byIds(ids))
}
export {characterService}