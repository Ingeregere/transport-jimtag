import axios from 'axios'
import {API} from "../../config";
const ANNONCE_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/commands/';
const BRAND_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/brands/';
const COUNTRY_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/countries/';
const MODEL_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/models/';
const CATEGORY_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/categories/';
const CONTACT_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/contacts/';
const USER_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/users/';
class AllServices {
    getAllAnnonces(){
        return axios.get(ANNONCE_API_URL+'getAllCommands')
    }
    getAllBrand(){
        return axios.get(BRAND_API_URL+'getAllBrands' )
    }


    postModels(newModel) {
        return axios.post(MODEL_API_URL, newModel)
    }

    postAnnonces(newAnnonce) {
        return axios.post(ANNONCE_API_URL, newAnnonce)
    }


    getAllCountry(){
        return axios.get(COUNTRY_API_URL+'getAllCountry')
    }

    postCountry(newCountry) {
        return axios.post(COUNTRY_API_URL, newCountry)
    }


    postCategory(newCategory) {
        return axios.post(CATEGORY_API_URL, newCategory)
    }

    getAllContact(){
        return axios.get(CONTACT_API_URL)
    }
    getAllUser(){
        return axios.get(USER_API_URL)
    }

}

export default new AllServices