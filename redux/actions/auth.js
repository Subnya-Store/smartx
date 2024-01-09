import axios from 'axios';
import apiUrl from '../services/api';
// import NewFormData from 'form-data';
import requestHeader from '../services/request-header';
import { clearSession, getSession, setSession } from '../services/session';

// const convertObjectToFormData = data => {
//   const formData = new NewFormData();
//   for (var key in data) {
//     if (key == 'images') {
//       for (let index = 0; index < data[key].length; index++) {
//         formData.append('images', {
//           name: data[key][index].name,
//           type: data[key][index].type,
//           uri:
//             Platform.OS === 'ios'
//               ? data[key][index].uri.replace('file://', '')
//               : data[key][index].uri,
//         });
//       }
//     } else {
//       if (Array.isArray(data[key])) {
//         formData.append(key, JSON.stringify(data[key]));
//         continue;
//       }
//       formData.append(key, data[key]);
//     }
//   }
//   return formData;
// };

const fetchSignup = async (data, url) => {

  var config = {
    method: 'post',
    url: apiUrl + url,
    data: data,
  };
  return axios(config);
};
const fetchLogin = async (data, url) => {

  var config = {
    method: "post",
    url: apiUrl + url,
    data: data,
  };

  return axios(config);
  
};
const fetchPost = async (data, url) => {

  var config = {
    method: "post",
    url: apiUrl + url,
    data: data,
    headers: await requestHeader()
  };

  return axios(config);
  
};

const fetchGet = async (url) => {

  var config = {
    method: 'get',
    url: apiUrl + url
  };

  return axios(config);
};

const logout = async () => {
  return axios
    .post(apiUrl + '/logout', { headers: requestHeader() })
    .then(async response => {
      await clearSession();
    })
    .catch(async error => {
      await clearSession();
    });
};

export default { logout, fetchSignup,fetchPost, fetchLogin, fetchGet };
