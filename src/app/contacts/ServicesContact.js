import axios from 'axios'
import {API} from "../../config";

const CONTACT_TRANSPORT_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/contacts/';


class ContactServices {

    getAllContactTransport(){
        return axios.get(CONTACT_TRANSPORT_API_URL+'getAllContacts')
    }
    getContactById(id){
        return axios.get(CONTACT_TRANSPORT_API_URL+'getContactById/'+id)
    }
    getAllContactByCreatedAt(id){
        return axios.get(CONTACT_TRANSPORT_API_URL+'getAllContactByCreatedAt/')
    }

}

export default new ContactServices








