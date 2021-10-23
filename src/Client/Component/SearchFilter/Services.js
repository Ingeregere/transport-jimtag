import axios from 'axios'

const SEARCH_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/transport/searchTransportByBrandPaysBodyworkBox';


class AllServices {
    search(brand,country,box){
        return axios.get(SEARCH_API_URL+'/'+brand+'/'+country+'/'+box)
    }

}

export default new AllServices