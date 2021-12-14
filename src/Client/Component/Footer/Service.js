import axios from 'axios'

const NEWS_LETTER_API_URL = 'https://www.back-office.jimtag.fr/api/newsletter/';

class AllServices {
    postNewsletter(newsletter) {
        return axios.post(NEWS_LETTER_API_URL+'post-newsletter', newsletter)
    }
}
export default new AllServices