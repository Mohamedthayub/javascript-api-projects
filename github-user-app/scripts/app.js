import { getUser } from "./api.js";
import { validateUser } from "./user.js";
import { convertdateFormat} from "./date.js";

const searchBtn = document.querySelector("#search-btn");
export const userNameError = document.querySelector("#user-error");
searchBtn.addEventListener("click",function(e){
  const userInput = document.querySelector("#userinput").value;
  let userResult = validateUser(userInput);
  if(userResult == true){
    userNameError.innerText = "";
    const apiResult = getUser(userInput);
    createUser(apiResult);
  }
  else{
    userNameError.innerText = userResult;
    e.preventDefault();
  }
})
async function createUser(user){
   try{
    const userdata = await user;

    const userProfile = document.querySelector(".user-image");
    if(userdata.avatar_url != null){
      userProfile.src = userdata.avatar_url;
    }
    else{
      userProfile.src = "./assets/octocat.png";
    }
    const userName = document.querySelector("#username");
    if(userdata.name != null){
      userName.innerText = userdata.name;
    }
    else{
      userName.innerText = null;
    }
    const userId = document.querySelector("#userid");
    if(userdata.login != null){
      userId.innerText = "@"+ userdata.login;
    }
    else{
      userId.innerText = null;
    }
    const userBio = document.querySelector("#userbio");
    if(userdata.bio != null){
      userBio.innerText = userdata.bio;
    }
    else{
      userBio.innerText = "this profile has no bio";
    }
    const repoNum = document.querySelector("#repoNum");
    if(userdata.public_repos != null){
      repoNum.innerText = userdata.public_repos;
    }
    const userFollowers = document.querySelector("#followerscount");
    if(userdata.followers != null){
      userFollowers.innerText = userdata.followers;
    }
    else{
      userFollowers.innerText = 0;
    }
    const userFollowing = document.querySelector("#followingcount");
    if(userdata.following != null){
      userFollowing.innerText = userdata.following;
    }
    else{
      userFollowing.innerText = 0;
    }
    const userLocation = document.querySelector("#userlocation");
    if(userdata.location != null){
      userLocation.innerText = userdata.location;
    }
    else{
      userLocation.innerText = "Not available";
    }
    const userTwitter = document.querySelector("#twitter");
    if(userdata.twitter_username != null){
      userTwitter.innerText = userdata.twitter_username;
    }
    else{
      userTwitter.innerText = "Not available";
    }
    const userBlog = document.querySelector("#user-link");
    if(userdata.blog != ""){
      userBlog.innerText = userdata.blog;
    }
    else{
      userBlog.innerText = "Not available";
    }
    const userCompany = document.querySelector("#user-company");
    if(userdata.company != null){
      userCompany.innerText = userdata.company;
    }
    else{
      userCompany.innerText = "Not available";
    }
    const userJoinDate = document.querySelector("#joindate");
    if(userdata.created_at != null){
      userJoinDate.innerText ="joined" + " " + convertdateFormat(userdata.created_at);
    }
   }
   catch(err){
    console.log(err.message);
   }
}

