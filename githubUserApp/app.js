let userName = document.getElementById("userinput").value;
function  validateUser(username){
  const validPattern = /^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*$/;
  if(!username){
    alert("username must be valid");
  }
  if(userName.length > 39){
    alert("username should not exceed 39 character");
  }
  if (!validPattern.test(userName)){
    alert("Username can only contain letters, numbers, and hyphens (no spaces or special characters")
  }
  return username;
  
}

async function getUser(){
  if(userName.value == ""){
    alert("it should not be empty");
  }
  else{
    let URL = `https://api.github.com/users/${userName}`; 
    try{
      const response = await fetch(URL);
      if(!response.ok){
        switch(response.status){
          case 400:
            throw new Error("Bad Request");
          case 401:
            throw new Error("Unauthorized,Please check your credentials");
          
          case 404:
            throw new Error("User Not Found");
  
          case 500:
            throw new Error("Server Error Please try again later");
  
          default:
            throw new Error("Unexpected Erro" + response.statusText);
        }
        
      }
      const data = await response.json();
      createUser(data);
    }
    catch(err){
      console.log(err.message);
    }
  }
}

const seachBtn = document.querySelector("#search-btn");

function createUser(data){
  console.log(data);
}
seachBtn.addEventListener("click",function(e){
  e.preventDefault();
});
