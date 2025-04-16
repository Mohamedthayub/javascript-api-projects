const generateAdvice = document.querySelector(".adviceimage");
const advices = document.querySelector(".advice");
const adviceId = document.querySelector(".adviceId");
const URL = "https://api.adviceslip.com/advice";
document.addEventListener('DOMContentLoaded', getData);
async function getData(){
    try{
        const data = await fetch(URL);
        if(!data.ok){
            throw new Error("Network response was not ok ...");
        }
        const response = await data.json();
        let advice = response.slip.advice;
        let id = response.slip.id;
        createAdvice(advice,id);
    }
    catch(err){
        console.log(err.message);
        adviceId.innerText  = "ADVICE  #000";
        advices.innerText = "failed to load advice, Please try again ..";
    }

}

function createAdvice(advice,id){
    adviceId.innerText = `ADVICE  #${id}`;
    advices.innerText = advice;   
}
generateAdvice.addEventListener("click",getData);

