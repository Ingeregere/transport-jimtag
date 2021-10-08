import axios from 'axios'

const HOME_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/transport/';

class AllServices {
    getAllTransportByCategory(id){
        return axios.get(HOME_API_URL +'getAllTransportByCategory/'+id)
    }
}

export default new AllServices