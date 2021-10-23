import axios from 'axios'
const USERPROFIL_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/user/profile/';
const AUTHENTICATE_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/authenticate';


class AllServices {
    getAllUserProfile(){
        return axios.get(USERPROFIL_API_URL+'getAllUserProfile')
    }

    postUserProfile(data) {
        return axios.post(USERPROFIL_API_URL, data)
    }
    UpdateUserProfile(data) {
        return axios.put(USERPROFIL_API_URL, data)
    }
    getUserProfileById(id){
        return axios.get(USERPROFIL_API_URL +'getUserProfileById/'+id)
    }
    postAuthenticate(data){
        return axios.post(AUTHENTICATE_API_URL, data)
    }
}

export default new AllServices