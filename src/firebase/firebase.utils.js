import firebase from "firebase";
import "firebase/storage";

const config = {
    apiKey: "AIzaSyBWvGTEPBcBPfhUAed4VLz4vXfoSNBr-i8",
    authDomain: "classroomchat-dc38d.firebaseapp.com",
    databaseURL: "https://classroomchat-dc38d.firebaseio.com",
    projectId: "classroomchat-dc38d",
    storageBucket: "classroomchat-dc38d.appspot.com",
    messagingSenderId: "1077517356991",
    appId: "1:1077517356991:web:a0e160f6055408d59c9b0a",
    measurementId: "G-S0Y7V3W3KQ"
};

const app = firebase.initializeApp(config);
const storage = firebase.storage();

// export {base , app , storage}
export { app , storage , firebase as default}