import {initializeApp} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {getDatabase,get,ref,child} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import {getAuth,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import {getAnalytics} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyBhACky631Ndlzhlz1UT8MhxJCl0ktlz6E",
    authDomain: "login-73501.firebaseapp.com",
    projectId: "login-73501",
    storageBucket: "login-73501.appspot.com",
    messagingSenderId: "601547859976",
    appId: "1:601547859976:web:0585789f973320782209bd",
    measurementId: "G-SW9QC7DH8M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase();
const dbref = ref(db);

var mail = document.getElementById('email');
var pwd = document.getElementById("password");

let login = evt => {
    evt.preventDefault();
    SignInUserWithEmailAndPassword(auth, mail.value, pwd.value)
        .then((credentials) => {
            console.log(credentials);
        }).catch(error => alert(error.message));
}
signin.addEventListener('submit', login);