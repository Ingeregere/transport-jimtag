import axios from 'axios'

const BODYWORK_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/bodywork/';


class CarrosseriesServices {

    getAllBodywork(){
        return axios.get(BODYWORK_API_URL+'getAllBodywork')
    }
    getAllBodyworkById(id){
        return axios.get(BODYWORK_API_URL+'getBodyworkById/'+id)
    }
    updateBodywork(data){
        return axios.put(BODYWORK_API_URL, data)
    }
    postBodywork(newBodyWork) {
        return axios.post(BODYWORK_API_URL, newBodyWork)
    }
}


export default new CarrosseriesServices










