const user={
    name:"Aditya Chaurasia",
    price:700,
    welcomeMsg:function(){
        console.log(`${this.name} ,welcome to the website` );
        console.log(this);
    }
}
// console.log(user.welcomeMsg());
// user.name="Abhi"
// console.log(user.welcomeMsg());
// console.log(this);
function helper() {
    let uname="sandeep"
    console.log(this.uname);
}
// helper()
const addTwo=(n1,n2)=> n1+n2
console.log(addTwo(2,7));

(function helper(name){                                                   //NAME IIFE
    console.log(`helper has been called ${name}`)
})("Aditya");

(()=>{                                                                   //SIMPLE IIFE
    console.log(`helper 2 has been called`);
})();