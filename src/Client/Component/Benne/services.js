import axios from 'axios'

const HOME_API_URL = 'https://back-office.jimtag.fr/api/transport/';

class AllServices {
    getAllTransportByCategory(id){
        return axios.get(HOME_API_URL +'get-all-transports-category/'+id)
    }
}

export default new AllServices