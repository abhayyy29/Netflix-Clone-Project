
const signInBtn = document.getElementById("button1");

signInBtn.addEventListener("click", function(){
   const email = document.getElementById("email-inp").value;
   const password = document.getElementById("pass-inp").value;
   if(email === "" || password === "" ){
     alert("Please fill all fields")
    return;
}

localStorage.setItem("isLoggedIn", "true")

window.location.href = "profile.html"
});