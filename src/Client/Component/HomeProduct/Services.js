import axios from 'axios'

const HOME_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/transport/';

class AllServices {
    getAllTransportHomePage(){
        return axios.get(HOME_API_URL +'getAllTransportHomePage' )
    }
}

export default new AllServices