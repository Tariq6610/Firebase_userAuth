import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

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

let authUser = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  // Initialize Firebase Authentication and get a reference to the service
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.location.href = './signIn.html'
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });
};

let btn = document.getElementById("btn");
let sbtn = document.getElementById("sbtn");

if (btn) {
  btn.addEventListener("click", authUser);
}

let sEmail = document.querySelector("#sEmail");
let sPassword = document.querySelector("#sPassword");

let sAuth = () => {
  signInWithEmailAndPassword(auth, sEmail.value, sPassword.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.location.href = './dashboard.html'
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });
};

if (sbtn) {
  sbtn.addEventListener("click", sAuth);
}

//Authentication through Google
let google_login = document.querySelector('#img')
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();
google_login.addEventListener('click', ()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user)
    window.location.href = './dashboard.html'
    alert('done');
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);

  });

})
