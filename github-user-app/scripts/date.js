export function convertdateFormat(date){
    const [year,month,day] = date.split("-");
    let first = day.slice(0,2);
    let newDate = new Date(`${year}-${month}-${first}`);
    return newDate.toLocaleDateString("en-GB",{
        day :"numeric",
        month : "long",
        year : "numeric"
    })
}
