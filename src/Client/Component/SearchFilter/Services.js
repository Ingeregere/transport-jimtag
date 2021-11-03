import axios from 'axios'

const SEARCH_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/transport/searchTransportByBrandPaysBodyworkBox';


class AllServices {
    search(category,brand,country,box){
        return axios.post(SEARCH_API_URL+'/'+category+'/'+brand+'/'+country+'/'+box)
    }

}

export default new AllServices