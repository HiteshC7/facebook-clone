// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAcU9NIMzAVa20LGhJTIQaBAvyWMatX1BU",
  authDomain: "resume-facebook-project.firebaseapp.com",
  projectId: "resume-facebook-project",
  storageBucket: "resume-facebook-project.appspot.com",
  messagingSenderId: "11113575110",
  appId: "1:11113575110:web:2bc6b31d0d370c34c65dc7",
  measurementId: "G-DRSJK0SM29"
};
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebase.auth()
const provider=new firebase.auth.GoogleAuthProvider()

export {auth,provider};
export default db;