import axios from 'axios'

const CONTACT_TRANSPORT_API_URL = 'http://backend-e-commerce-transport.jimtag.fr/api/contacts/';


class AllServices {
    post(data){
        return axios.post(CONTACT_TRANSPORT_API_URL+'createContact',data)
    }
}
export default new AllServices










