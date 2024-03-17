import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
    getDatabase,
    set,
    ref,
    get,
    child
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyAvs_IFsAG0_e6E-1b_YAGt7YHx5sLe2dM",
    authDomain: "qapp-6e562.firebaseapp.com",
    projectId: "qapp-6e562",
    storageBucket: "qapp-6e562.appspot.com",
    messagingSenderId: "774105995717",
    appId: "1:774105995717:web:f3580d1d937ce038b193ac",
    measurementId: "G-F6H92FRB74"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase();
const dbref = ref(db);
const user = auth.currentUser;

var email = document.getElementById('mail');
var UserName = document.getElementById("UserName");
var password = document.getElementById("pwd");

let regis = evt => {
    evt.preventDefault();
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((credentials) => {

            const userId = auth.currentUser.uid;
            set(ref(db, 'users/' + userId), {
                username: UserName.value,
                email: email.value,
                password: password.value
            });

            alert('Saved')
            window.location.href = "../categories/";
        }).catch(error => alert(error.message));
}
signup.addEventListener('submit', regis);

var mail = document.getElementById('email');
var pwd = document.getElementById("password");

let login = evt => {
    evt.preventDefault();
    signInWithEmailAndPassword(auth, mail.value, pwd.value)
        .then((credentials) => {
            console.log(credentials);
            // alert("You are logged in!");
            window.location.href = "../categories/";
        }).catch(error => alert(error.message));
}
signin.addEventListener('submit', login);