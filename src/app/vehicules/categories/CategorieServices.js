import axios from 'axios'

const CATEGORY_API_URL = 'https://backend-e-commerce-transport.jimtag.fr/api/category/item/';

class CategoryServices {
    getAllCategory(){
        return axios.get(CATEGORY_API_URL+'getAllCategoryItem')
    }
    postCategory(newCategory) {
        return axios.post(CATEGORY_API_URL, newCategory)
    }
    updateCategory(formaData,id) {
        return axios.put(CATEGORY_API_URL,{formaData,id} )
    }
    getImage(id){
        return axios.get(CATEGORY_API_URL+'viewImageCategoryItemById/'+id)
    }
    getCategoryById(id){
        return axios.get(CATEGORY_API_URL +'getCategoryItemById/'+id)
    }

}


export default new CategoryServices