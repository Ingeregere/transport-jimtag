import axios from 'axios'
const TRANSPORT_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/transport/';
const CATEGORY_TRANSPORT_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/category/';

class TransportServices {

    getAllTransport(){
        return axios.get(TRANSPORT_API_URL)
    }
    getAllCategoryTransport(){
        return axios.get(CATEGORY_TRANSPORT_API_URL+'getAllCategory')
    }

    postTransport(newTransport) {
        return axios.post(TRANSPORT_API_URL, newTransport)
    }
}


export default new TransportServices










