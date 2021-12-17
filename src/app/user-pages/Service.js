import axios from 'axios'

class AllServices {
  
    postUserProfile(data) {
        return axios.post('https://www.back-office.jimtag.fr/api/customer/post-customer/', data)
    }
  
    postAuthenticate(data){
        return axios.post('https://www.back-office.jimtag.fr/api/customer/post-authenticate/', data)
    }
}

export default new AllServices