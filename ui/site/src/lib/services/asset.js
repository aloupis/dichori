
import axios from 'axios';

const url ='http://localhost:9000'; //'https://patmos-nginx.herokuapp.com/media';

export const listAssets = (path) => axios({
    url: `${url}/files`,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: `folder="${path}"`
});
