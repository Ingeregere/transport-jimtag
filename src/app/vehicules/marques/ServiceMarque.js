import axios from 'axios'

const BRAND_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/brands/';

class AllServices {
    getAllBrand(){
        return axios.get(BRAND_API_URL +'getAllBrands' )
    }

    postBrand(newBrand) {
        return axios.post(BRAND_API_URL, newBrand)
    }
    UpdateBrand(newBrand) {
        return axios.put(BRAND_API_URL, newBrand)
    }
    getBrandById(id){
        return axios.get(BRAND_API_URL +'getBrandById/'+id)
    }
}

export default new AllServices