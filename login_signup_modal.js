 // Elements
 const loginModal = document.getElementById("loginModal");
 const signupModal = document.getElementById("signupModal");
 const profileModal = document.getElementById("profileModal");
 const userIcon = document.getElementById("userIcon");
 const profileUserName = document.getElementById("profileUserName");
 const logoutButton = document.getElementById("logoutButton");
 
 // Default Test Account (if no user exists)
 
 
 // Function to check if user is logged in and update UI
 
 
 // Show Login Modal or Profile Modal when clicking user icon
 userIcon.addEventListener("click", () => {
   if (!localStorage.getItem("loggedInUser")) {
     loginModal.classList.add("show");
   } else {
     showUserProfile();
     profileModal.classList.add("show");
   }
 });
 
 // Close Modals
 document.querySelectorAll(".close-btn").forEach(btn => {
   btn.addEventListener("click", () => {
     loginModal.classList.remove("show");
     signupModal.classList.remove("show");
     profileModal.classList.remove("show");
   });
 });
 
 // Switch Between Login & Signup
 document.getElementById("showSignup").addEventListener("click", (e) => {
   e.preventDefault();
   loginModal.classList.remove("show");
   signupModal.classList.add("show");
 });
 
 document.getElementById("showLogin").addEventListener("click", (e) => {
   e.preventDefault();
   signupModal.classList.remove("show");
   loginModal.classList.add("show");
 });
 
 // Signup Function
 document.getElementById("signupSubmit").addEventListener("click", () => {
   const name = document.getElementById("signupName").value.trim();
   const email = document.getElementById("signupEmail").value.trim();
   const password = document.getElementById("signupPassword").value.trim();
 
   if (name && email && password) {
     localStorage.setItem("userName", name);
     localStorage.setItem("userEmail", email);
     localStorage.setItem("userPassword", password);
     signupModal.classList.remove("show");
     alert("Signup successful! Please login.");
   } else {
     alert("Please fill in all fields.");
   }
 });
 
 // Login Function
 document.getElementById("loginSubmit").addEventListener("click", () => {
   alert("login Successfull")
   loginModal.classList.remove("show");
 
 });
 
 // Show User Profile in Modal
 function showUserProfile() {
   const loggedInUser = localStorage.getItem("loggedInUser");
   profileUserName.textContent = loggedInUser ? loggedInUser : "User";
 }
 
 // Logout Function
 
 
 // Check & Update Navbar on Page Load
 window.addEventListener("load", updateNavbar);
 