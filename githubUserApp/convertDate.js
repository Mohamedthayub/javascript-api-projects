function convertDate(date){
    const [day,month,year] = date.split("-");
    const dateObj = new Date(`${year}-${month}-${day}`);
    return dateObj.toLocaleDateString("en-GB",{
        day: "numeric",
        month : "long",
        year: "numeric",
    })   
}
console.log(convertDate("01-05-2005"));