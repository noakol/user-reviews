import axios from 'axios';

export default class BaseApi {
    constructor(config = {}) {
        this.request = this.request(config);
        this.getMethod = this.getMethod.bind(this);
        this.postMethod = this.postMethod.bind(this);
    }

    request = config => {
        return axios.create({
            // baseURL: 'localhost'
        })
    }

    getMethod = (url, params) => {
        return this.request
          .get(url, params)
          .then(response => {
            return response.data;
          })
          .catch(error => {
            return error;
          });
      };
    
    postMethod = (url, payload) => {
        return this.request
        .post(url, payload)
        .then(response => {
            return response.data
        })
        .catch(error => {
            throw error;
        })
    }
}
