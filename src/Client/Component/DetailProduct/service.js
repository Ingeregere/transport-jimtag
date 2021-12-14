import axios from 'axios'

const TRANSPORT_ID_API_URL = 'https://www.back-office.jimtag.fr/api/transport/';


class AllServices {
    getTransportById(id){
        return axios.get(TRANSPORT_ID_API_URL+'get-transport-by-id/'+id)
    }
}
export default new AllServices










