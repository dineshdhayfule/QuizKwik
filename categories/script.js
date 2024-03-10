
 function logout() {
     document.documentElement.setAttribute('data-bs-theme', 'dark');
     window.location.href = "../login/"; // Assuming login.html is in the login folder
 }
 document.getElementById('light').addEventListener('click', () => {
     if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
         document.documentElement.setAttribute('data-bs-theme', 'light')
         document.getElementById('light').innerText = "Dark Mode"
     } else {
         document.documentElement.setAttribute('data-bs-theme', 'dark')
         document.getElementById('light').innerText = "Light Mode"
     }
 })

 
