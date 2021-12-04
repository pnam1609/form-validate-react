import axios from 'axios';

export default function callApi(endpoint, method = 'GET', body, token = null) {
    return axios({
        method,
        url: `https://jsonplaceholder.typicode.com/${endpoint}`,
        data: body,
        headers: {
            Authorization: token
        }
    }).catch(err => {
        console.log(err);
    });
}


