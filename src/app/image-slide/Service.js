import axios from 'axios'

const CAROUSEL_API_URL = 'https://back-office.jimtag.fr/api/carousel/';
const ARTICLE_API_URL = 'https://back-office.jimtag.fr/api/article/';


class CarrosseriesServices {

    getAllCarousel(){
        return axios.get(CAROUSEL_API_URL+'get-all-carousels')
    }
    getAllArticles(){
        return axios.get(ARTICLE_API_URL+'get-all-articles')
    }
  
 
  
  
   
}

export default new CarrosseriesServices










