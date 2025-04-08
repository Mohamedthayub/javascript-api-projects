let userName = document.getElementById("userinput").value;

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
