const profiles = document.querySelectorAll(".prof-boxs").forEach(profile => {
    profile.addEventListener("click" ,() => {
        const name = profile.dataset.name;
        localStorage.setItem("profile", name)
        window.location.href = "browse.html"
    }) 
})

if(localStorage.getItem("isLoggedIn") !== ("true")){
    window.location.href = "SignInPage.html"
}