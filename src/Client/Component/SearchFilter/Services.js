import axios from 'axios'

const SEARCH_API_URL = 'https://www.back-office.jimtag.fr/api/transport/search-transports/';


class AllServices {
    search({category,brand,country,box}){
        return axios.get(SEARCH_API_URL+category+'/'+brand+'/'+country+'/'+box)
    }

}

export default new AllServices