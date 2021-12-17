import axios from 'axios'

class ContactServices {

    getAllCommandeTransport(token){
        return axios.get('https://www.back-office.jimtag.fr/api/command/get-all-comands/'+token)
    }
}

export default new ContactServices








