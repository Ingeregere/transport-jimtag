import axios from 'axios'

const CATEGORY_API_URL = 'https://back-office.jimtag.fr/api/category/';

class CategoryServices {
    getAllCategory(){
        return axios.get(CATEGORY_API_URL+'get-all-categories')
    }   
}


export default new CategoryServices