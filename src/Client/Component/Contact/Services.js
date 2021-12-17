
import axios from 'axios'

const API_CONTACT = 'https://www.back-office.jimtag.fr/api/page-contact/'


class AllServices {
    getAllContact(){
        return axios.get(API_CONTACT+'getAllPageContact')
    }
    postContact(data) {
        return axios.post(API_CONTACT+'post-contact/',data)
    }

}

export default new AllServices