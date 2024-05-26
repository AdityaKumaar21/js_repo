function addTwoNumbers(number1,number2) {
    // console.log("ur answer is ");
    return (number1+number2);
}
let ans=addTwoNumbers(2,4)
// console.log(ans);
function userName(name="Papa"){
    if(!name){
        console.log("Please enter a valid name!!");
        return
    }
    return `${name} has logged in`
}
// console.log(userName());
// console.log(userName("Aditya Chaurasia"));

function contains(v1,v2,...v){
    return v
}
// console.log(contains(13,4,5));

const user={
    name:"Adityaaa",
    id:211210005
}
function handleObject(anyObj) {
    return `The name is ${anyObj.name} and the id is ${anyObj.id}.`
}
console.log(handleObject(user));