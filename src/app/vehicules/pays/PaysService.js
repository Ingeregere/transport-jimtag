import axios from 'axios'

const COUNTRY_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/countries/';

class CategoryServices {
    getAllCountry(){
        return axios.get(COUNTRY_API_URL+'getAllCountry')
    }
    UpdateCountry(data){
        return axios.put(COUNTRY_API_URL, data)
    }
    getCountryById(id){
        return axios.get(COUNTRY_API_URL+'getCountryById/'+id)
    }

    postCountry(newCountry) {
        return axios.post(COUNTRY_API_URL, newCountry)
    }
}


export default new CategoryServices