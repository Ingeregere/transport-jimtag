import axios from 'axios'

const HOME_API_URL = 'https://back-office.jimtag.fr/api/transport/';

class AllServices {
    getAllTransportHomePage(){
        return axios.get(HOME_API_URL +'get-all-transports-homepage' )
    }
}
export default new AllServices