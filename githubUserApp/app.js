let button = document.getElementById("btn");
let container  = document.getElementById("cont");
let userName = document.querySelector("#username");
let userImage = document.querySelector(".user-image");
let userId = document.querySelector("#userid");
let userBio = document.querySelector("userbio");
const URL = "https://api.github.com/users/torvalds";

async function getData(){
    try{
        const data = await fetch(URL);
        const response = await data.json();
        userImage.src = response.avatar_url;
        userName.innerText = response.name;
        userId.innerText = "@" + response.login;
        userBio.innerText = response.bio;

        
    }
    catch(err){
        console.log(err);
    }
}
button.addEventListener("click",() => {
    container.classList.add("profile-container");
    container.removeAttribute("id");
    getData();

})
// getData();



