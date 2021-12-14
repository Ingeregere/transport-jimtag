import axios from 'axios'

const BRAND_API_URL = 'https://back-office.jimtag.fr/api/brand/';

class AllServices {
    getAllBrand(){
        return axios.get(BRAND_API_URL +'get-all-brands')
    }
}

export default new AllServices