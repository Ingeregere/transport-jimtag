import axios from 'axios'
import {API} from "../../config";

const CONTACT_TRANSPORT_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/contacts/';
const CONTACTBYTOKEN_TRANSPORT_API_URL = 'https://www.back-office.jimtag.fr/api/contact/get-all-contacts/';


class ContactServices {

    getAllContactTransport(){
        return axios.get(CONTACT_TRANSPORT_API_URL+'getAllContacts')
    }
    getAllContactTransportByToken(token){
        return axios.get(CONTACTBYTOKEN_TRANSPORT_API_URL+token)
    }
    getContactById(id){
        return axios.get(CONTACT_TRANSPORT_API_URL+'getContactById/'+id)
    }
    getAllContactByCreatedAt(id){
        return axios.get(CONTACT_TRANSPORT_API_URL+'getAllContactByCreatedAt/')
    }

}

export default new ContactServices








