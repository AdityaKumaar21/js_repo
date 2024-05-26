const number=new Number(10000000)
console.log(number.toFixed(2));
console.log(number.toString().length);
console.log(number.toPrecision(3));
console.log(number.toLocaleString('en-IN'));
const min=10
const max=20
console.log(Math.ceil(Math.random()*(max-min+1)+min));