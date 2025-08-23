const jokeText = document.querySelector("#joke");
const jokeId = document.querySelector("#joke-id");
const button = document.querySelector("#gen-joke");


function createJoke(joke,id){
    jokeText.innerText = joke;
    jokeId.innerText = `JokeId : ${id}`;
}
function getData(){ 
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => {
        return res.json();
    })
    .then((response) => {
        const id = response.id;
        const joke = response.setup;
        createJoke(joke,id);
        
    })
    .catch((error) => {
        console.log(error);
    })
}

button.addEventListener("click",getData);


