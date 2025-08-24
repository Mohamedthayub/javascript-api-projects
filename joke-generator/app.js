const jokeText = document.querySelector("#joke");
const jokeId = document.querySelector("#joke-id");
const button = document.querySelector("#gen-joke");


function createJoke(jokeTextValue,JokeidValue){
    jokeText.innerText = jokeTextValue;
    jokeId.innerText = `JokeId : ${JokeidValue}`;
}
async function  getData(){
    button.disabled = true;
    jokeId.innerText = "Loding id ... "
    jokeText.innerText = "Loading Joke ...";
    try{ 
        const data = await fetch("https://official-joke-api.appspot.com/random_joke");
        const response = await data.json();
        createJoke(response.setup,response.id);
        console.log(response);
    }
    catch(error){
        console.log("Failed to fetch joke :",error);
    }
    finally{
        button.disabled = false;

    }
}

button.addEventListener("click",getData);

