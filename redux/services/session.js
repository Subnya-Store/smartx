// import EncryptedStorage from 'react-native-encrypted-storage';


var getSession = async data => {
  try {
    const res=await localStorage.getItem('user');
    if(res){
      window.location.href='/'
    }
   
    return JSON.parse(session);
  } catch (error) {
    console.log(error);
  }
};

var setSession = async data => {
  try {
    await localStorage.setItem('user', JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

var clearSession = async () => {
  await localStorage.removeItem('user');
};

export {getSession, setSession, clearSession};
