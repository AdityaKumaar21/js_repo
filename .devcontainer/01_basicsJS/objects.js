const mySym=Symbol("key1")
const myObj={
    name:'Aditya',
    "full name":"Aditya Chaurasia",
    [mySym]:"key1",                          //inclusion of symbol in object
    email:"kumaaraditya47@gmail.com",
    daysLoggedIn:["Monday","Wednesday"]
}
myObj.greeting=function () {
    console.log(`hello user`);
}
myObj.greeting2=function(){
    console.log(`hello user ${this["full name"]}`);
}
console.log(myObj.greeting());
console.log(myObj.greeting2());
const o1={
    1:"q",
    2:"w"
}
const o2={
    3:"a",
    4:"s"
}
const o4={
    4:"z",
    5:"x"
}
const o3={...o1,...o2,...o4}    //assign diff objects to a single target object by using ... spread operator.        
// const o3=Object.assign({},o1,o2,o4)   
 //assign diff objects to a single target object i.e. {} here.
console.log(o3);
// myObj["full name"]="Abhi Kumaar"
// console.log(myObj[mySym]);
// console.log(myObj["daysLoggedIn"]);
// console.log(myObj["full name"]);
// Object.freeze(myObj)                           //doesnt let modifications happen.
// myObj["full name"]="Aditya Kumaar"
// console.log(myObj["full name"]);


const course={
    courseName:"abc",
    price:1223,
    courseInstructor:"Aditya"
}
const {courseInstructor:ci}=course              //de-structure 
console.log(course.courseInstructor);
console.log(ci);                            