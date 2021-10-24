import axios from 'axios'

const COMMAND_TOKEN_TRANSPORT_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/customer/getCommandByUsername';
const DATAUSER_TOKEN_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/customer/getDataByAuthenticate/';


class ContactServices {

    getAllCommandeTransport(token){
        return axios.get(COMMAND_TOKEN_TRANSPORT_API_URL+'/'+token)
    }
    getAllData(token){
        return axios.get(DATAUSER_TOKEN_API_URL+token)
    }
}

export default new ContactServices








