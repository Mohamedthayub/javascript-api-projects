// function convertDate(date) {
//     const [day, month, year] = date.split("-"); 
//     const dateObj = new Date(`${year}-${month}-${day}`); // Convert to Date object

//     return dateObj.toLocaleDateString("en-GB", {
//         day: "numeric",
//         month: "long",
//         year: "numeric",
//     });
// }

// // console.log(convertDate("01-12-2005")); // 1 December 2005
// console.log(convertDate("01-07-2005")); // 1 July 2005
const URL = "https://api.github.com/users/torvalds";

async function getData(){
    try{
        const data = await fetch(URL);
    
        const response = await data.json();

        // userImage.src = response.avatar_url;
        console.log(response);
        
    }
    catch(err){
        console.log(err);
    }
}
getData();