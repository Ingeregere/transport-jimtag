import axios from 'axios'

const TRANSPORT_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/transport/';

const TRANSPORT_API_URL_IMAGE_PART1 = 'https://backend-e-commerce-transport.jimtag.fr/api/one/part/image/transport/';
const TRANSPORT_API_URL_IMAGE_PART2 = 'https://backend-e-commerce-transport.jimtag.fr/api/two/part/image/transport/';
const TRANSPORT_API_URL_IMAGE_PART3 = 'https://backend-e-commerce-transport.jimtag.fr/api/three/part/image/transport/';
const TRANSPORT_API_URL_IMAGE_PART4 = 'https://backend-e-commerce-transport.jimtag.fr/api/four/part/image/transport/';
const TRANSPORT_API_URL_IMAGE_PART5 = 'https://backend-e-commerce-transport.jimtag.fr/api/five/part/image/transport/';


class GererServices {
    getAllTransports(){
        return axios.get(TRANSPORT_API_URL+'getAllTransport')
    }

    postImageTransportPart1(data){
        return  axios.put(TRANSPORT_API_URL_IMAGE_PART1+'updateTransportImage/', data)
    }
    postImageTransportPart2(data){
        return  axios.put(TRANSPORT_API_URL_IMAGE_PART2+'updateTransportImage/', data)
    }
    postImageTransportPart3(data){
        return  axios.put(TRANSPORT_API_URL_IMAGE_PART2+'updateTransportImage/', data)
    }
    postImageTransportPart4(data){
        return  axios.put(TRANSPORT_API_URL_IMAGE_PART2+'updateTransportImage/', data)
    }
    postImageTransportPart5(data){
        return  axios.put(TRANSPORT_API_URL_IMAGE_PART2+'updateTransportImage/', data)
    }
    remove(id){
        return axios.delete( TRANSPORT_API_URL+'/deleteTransport'+id)
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










