// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9A_3_uV4Jkbojy2HZckUOkX29iyYPyQo",
    authDomain: "my-order-app-17fff.firebaseapp.com",
    projectId: "my-order-app-17fff",
    storageBucket: "my-order-app-17fff.appspot.com",
    messagingSenderId: "880112798833",
    appId: "1:880112798833:web:fafb1f171b61527b40dfd0"
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

console.log('firebase init')
export default firebaseApp
