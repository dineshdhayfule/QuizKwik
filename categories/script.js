AOS.init({
    easing: 'ease-in-out-sine'
});



document.getElementById('light').addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'light')
        document.getElementById('light').innerText = "Dark Mode"
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
        document.getElementById('light').innerText = "Light Mode"
    }
})



 
document.getElementById("htmlA").addEventListener("click", function () {
    setCookie("choice", "1", 30);
});

document.getElementById("cssA").addEventListener("click", function () {
    setCookie("choice", "2", 30);

});

document.getElementById("jsA").addEventListener("click", function () {
    setCookie("choice", "3", 30);
});


document.getElementById("cA").addEventListener("click", function () {
    setCookie("choice", "4", 30);
});
document.getElementById("javaA").addEventListener("click", function () {
    setCookie("choice", "5", 30);
});

document.getElementById("pythonA").addEventListener("click", function () {
    setCookie("choice", "6", 30);
});
document.getElementById("cppA").addEventListener("click", function () {
    setCookie("choice", "7", 30);
});

document.getElementById("phpA").addEventListener("click", function () {
    setCookie("choice", "8", 30);
});

document.getElementById("sqlA").addEventListener("click", function () {
    setCookie("choice", "9", 30);
});
// Set a cookie with a specified name, value, and expiration date
function setCookie(cookieName, cookieValue, expirationDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000)); // Expiration time in milliseconds
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

 function logout() {
     
        window.location.href = "../login/"; 
}