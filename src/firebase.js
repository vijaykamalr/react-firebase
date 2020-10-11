import firebase from 'firebase/app';
import 'firebase/auth';
const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_APPKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DBURL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSENGERID,
    appId: process.env.REACT_APP_FIREBASE_APPID
});
export const auth = app.auth();
export default app;