// import EncryptedStorage from 'react-native-encrypted-storage';

export default async function requestHeader() {
  let user = await localStorage.getItem('user');
  // user = user === undefined ? '' : JSON.parse(user);
  if (user && user.token) {
    return {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + user.token,
    };
  } else {
    return {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    };
  }
}
