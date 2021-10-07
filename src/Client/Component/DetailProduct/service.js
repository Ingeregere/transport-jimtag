import axios from 'axios'

const TRANSPORT_ID_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/transport/';


class AllServices {
    getTransportById(id){
        return axios.get(TRANSPORT_ID_API_URL+'getTransportById/'+id)
    }
}
export default new AllServices










