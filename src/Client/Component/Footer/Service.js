import axios from 'axios'


class AllServices {
    postNewsletter(newsletter) {
        return axios.post('https://www.back-office.jimtag.fr/api/newsletter/post-newsletter/',newsletter )
        }
}
export default new AllServices