import axios from 'axios'

const COUNTRY_API_URL = 'https://back-office.jimtag.fr/api/country/';

class CountryServices {
    getAllCountry(){
        return axios.get(COUNTRY_API_URL+'get-all-countries')
    }
}


export default new CountryServices