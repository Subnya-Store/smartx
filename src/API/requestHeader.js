// import EncryptedStorage from "react-native-encrypted-storage";

export default function requestHeader() {
    let user = localStorage.getItem("user");
    // user = user === undefined ? "" : JSON.parse(user);
    
    if (user) {
      return {
        Accept: "application/json",
        // "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + user,
      };
    } else {
      return {
        Accept: "application/json",
        // "Content-Type": "multipart/form-data",
      };
    }
  }