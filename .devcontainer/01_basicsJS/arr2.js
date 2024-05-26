const arr1=new Array(1,2,3)
const arr2=new Array("a","abb","avd")
let arr3=new Array(123,145.555)
// arr1.push(arr2)
// const newArr=arr1.concat(arr2)  //concat usage
let newArr=[...arr1,...arr2,...arr3]   //spread opertor ...
console.log(newArr);
let a=[1,2,4,[1,3,5],3,[2,4,[5,2,1]]]
// console.log(a.flat(Infinity));
let q=1
let w=2
let e=3
console.log(Array.of(q,w,e));
Array.