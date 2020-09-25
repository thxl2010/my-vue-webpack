import captureMessage from '@/assets/js/utils/sentry/report';
import axios from 'axios';
import JSONbig from 'json-bigint';
import jsonp from 'jsonp';
import qs from 'qs';
import Utils from '../utils';

// ! [axios#983: json parse bigint](https://github.com/axios/axios/issues/983)
const JSONbigString = JSONbig({ storeAsString: true });
axios.defaults.transformResponse = [
  function(data) {
    // Do whatever you want to transform the data
    return JSONbigString.parse(data);
  },
];

const apiServerUrl = window.location.origin;

// axios 配置
axios.defaults.timeout = 900000;
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// axios.defaults.headers.post['Content-Type'] =
// 'application/x-www-form-urlencoded; charset=UTF-8';
axios.defaults.baseURL = apiServerUrl;

// axios 实例
const $http = axios.create({
  baseURL: apiServerUrl,
  timeout: 900000,
});

// POST传参序列化
$http.interceptors.request.use(
  (config) => {
    if (config.method === 'post') {
      if (Utils.isJson(config)) {
        config.data = JSON.stringify(config.data);
      } else {
        config.data = qs.stringify(config.data, {
          arrayFormat: 'brackets',
          allowDots: true,
        });
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// 返回状态判断
const otherUrl = ['/api/crm/shopShotLink', '/api/crm/goodsShotLink'];
$http.interceptors.response.use(
  (res) => {
    // console.log('axios.interceptors.response : res : ', res);
    const data = res.data;
    data.msg = data.msg || data.message;
    data.message = data.message || data.msg;

    if (otherUrl.includes(res.config.url)) {
      if (res.status !== 200) {
        return Promise.reject(res);
      }
    } else {
      if (data.status !== 200 && data.status !== 'OK') {
        return Promise.reject(res);
      }
    }
    return res;
  },
  (error) => Promise.reject(error)
);

const fetch = (url, param = {}, method = 'get') =>
  new Promise((resolve, reject) => {
    const config = {
      method,
      url,
    };

    // `params` are the URL parameters to be sent with the request
    // Must be a plain object or a URLSearchParams object
    if (method === 'get') {
      config.params = param;
    } else {
      // `data` is the data to be sent as the request body
      // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
      // When no `transformRequest` is set, must be of one of the following types:
      // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
      // - Browser only: FormData, File, Blob
      // - Node only: Stream, Buffer
      config.data = param;
      config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      };
    }

    // console.log('config : ', config);
    $http(config)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        console.log('last error: ', error);
        reject(error.data);
      });
  });

const fetchLink = (url, param = {}, method = 'get') =>
  new Promise((resolve, reject) => {
    const config = {
      method,
      url,
    };
    config.params = param;

    $http(config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.data);
      });
  });

const fetchJson = (url, param = {}, method = 'get') =>
  new Promise((resolve, reject) => {
    const config = {
      method,
      url,
    };

    // `params` are the URL parameters to be sent with the request
    // Must be a plain object or a URLSearchParams object
    if (method === 'get') {
      config.params = param;
    } else {
      // `data` is the data to be sent as the request body
      // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
      // When no `transformRequest` is set, must be of one of the following types:
      // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
      // - Browser only: FormData, File, Blob
      // - Node only: Stream, Buffer
      config.data = param;
      config.headers = {
        'Content-Type': 'application/json;charset=UTF-8',
      };
    }

    // console.log('config : ', config);
    $http(config)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        // console.log('last error: ', error);
        reject(error.data);
      });
  });

/**
 *
 * @param url: query string
 *  eg: https://somo.so/urlshortener?longUrl=XXX`
 */
const fetchJsonp = (url) =>
  new Promise((resolve, reject) => {
    jsonp(url, (err, response) => {
      if (err) {
        reject(err);
      } else {
        /* eslint no-lonely-if:0 */
        if (response.status === 'OK') {
          resolve(response);
        } else {
          reject(response);
        }
      }
    });
  });

// 上传
const $upload = axios.create({
  baseURL: apiServerUrl,
  timeout: 900000,
  headers: {
    'Content-Type': 'mulipart/form-data',
  },
});
const CancelTokenOfUpload = axios.CancelToken;
// console.log('CancelTokenOfUpload : ', CancelTokenOfUpload);

// 返回状态判断
$upload.interceptors.response.use(
  (res) => {
    // console.log('axios.interceptors.response : res : ', res);

    if (res.data.status !== 200) {
      return Promise.reject(res);
    }
    return res;
  },
  (error) => {
    // console.log('axios.interceptors.response : error : ', error);
    return Promise.reject(error);
  }
);

/**
 * 上传
 * @param {*} url
 * @param FormData{*} param：
    let formData = new FormData();
    formData.append('file', file);
 * @param function{*} handleCancel
 */
const upload = (url, param = {}, handleCancel) => {
  console.log('axios: handleCancel :', handleCancel);
  return new Promise((resolve, reject) => {
    const config = {
      method: 'post',
      url,
      data: param,
    };

    if (handleCancel) {
      config.cancelToken = new CancelTokenOfUpload(function executor(c) {
        // An executor function receives a cancel function as a parameter
        handleCancel = c;
      });
    }

    console.log('axios config : ', config);

    $upload(config)
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        console.log('upload last error: ', error);
        captureMessage(config, error);
        reject(error.data);
      });
  });
};

export default {
  fetch,
  fetchJson,
  fetchJsonp,
  fetchLink,
  upload,
};
