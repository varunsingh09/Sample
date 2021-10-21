import axios from 'axios';
// import qs from 'qs';
const CONTENT_TYPE_DEFAULT = { "Content-Type": "application/x-www-form-urlencoded" };

class UserService {

    getDataFromApi() {
        return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`, {
            headers: CONTENT_TYPE_DEFAULT,
        });
    }

    // loginUser(payload, tenant) {
    //     return axios.post(Api.USER_LOGIN_TOKEN_API, qs.stringify(payload), {
    //         headers: CONTENT_TYPE_LOGIN,
    //         auth: {username:tenant.username,password:tenant.password},
    //     });
    // }

}

export default new UserService()