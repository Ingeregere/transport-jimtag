import axios from 'axios'

const TRANSPORT_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/transport/';


class GererServices {
    getAllTransports(){
        return axios.get(TRANSPORT_API_URL)
    }

    postImageTransport(data,id){
        return  axios.put(TRANSPORT_API_URL+'updateTransportImage/',{data,id})
    }
    updateTransport(data){
        return axios.put(TRANSPORT_API_URL, data)
    }
    getVehiculeById( id ){
        return axios.get(TRANSPORT_API_URL+'getTransportById/'+id)
    }
    enableDisableStatusTransport(data){
        return axios.post(TRANSPORT_API_URL+'enableDisableStatusTransport/',data)
    }

}


export default new GererServices










