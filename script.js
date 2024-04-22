import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuelLLhMoj1yY6z_UrtJl9PvaxYX9u4_U",
  authDomain: "users-authentication-48dc7.firebaseapp.com",
  projectId: "users-authentication-48dc7",
  storageBucket: "users-authentication-48dc7.appspot.com",
  messagingSenderId: "666936841196",
  appId: "1:666936841196:web:fb77439ebce77ea9d9e6c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let authUser = () =>{
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // Initialize Firebase Authentication and get a reference to the service
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
      });
}   

let btn = document.getElementById("btn");

btn.addEventListener('click', authUser);




