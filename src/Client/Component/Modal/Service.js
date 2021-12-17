import axios from 'axios'



class AllServices {
    post(data){
        return axios.post('https://www.back-office.jimtag.fr/api/contact/post-contact/',data)
    }
}
export default new AllServices










