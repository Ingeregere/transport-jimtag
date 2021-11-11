import axios from 'axios'

const TRANSPORT_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/transport/';
const TRANSPORT_API_URL_IMAGE = 'https://backend-e-commerce-transport.jimtag.fr/api/image/transport/';


class GererServices {
    getAllTransports(){
        return axios.get(TRANSPORT_API_URL)
    }

    postImageTransport(data){
        return  axios.put(TRANSPORT_API_URL_IMAGE+'updateTransportImage/', data)
    }
    remove(id){
        return axios.delete( TRANSPORT_API_URL +id)
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










