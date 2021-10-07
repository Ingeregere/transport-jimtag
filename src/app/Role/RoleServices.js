import axios from 'axios'
import {API} from "../../config";

const Role_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/roles/';

class AllServices {
    getAllRoles(){
        return axios.get(Role_API_URL +'getAllRoles' )
    }

    postRole(data) {
        return axios.post(Role_API_URL, data)
    }
    UpdateRole(data) {
        return axios.put(Role_API_URL, data)
    }
    getRoleById(id){
        return axios.get(Role_API_URL +'getRoleById/'+id)
    }
}

export default new AllServices