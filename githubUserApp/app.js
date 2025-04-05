const URL = "https://api.github.com/users/Mohamedthayub";

async function getData(){
    try{
        const data = await fetch(URL);
    
        const response = await data.json();
        
        console.log(response)

    }
    catch(err){
        console.log(err);
    }
    
}

getData();