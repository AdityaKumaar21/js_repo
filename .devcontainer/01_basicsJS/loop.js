let Arr=[1,2,3,4,5]
for (const i of Arr) {
    // console.log(i);
}
const greeting="Hello Abhi"
for (const greet of greeting) {
    if(greet==" ")
        continue
    else{
        // console.log(greet);
    }
}

const mp=new Map()
mp.set("IN",'India')
mp.set('AUS','Australia')
mp.set('ENG','England')
mp.set('In','Indonesia')

for (const [i,j] of mp) {
    // console.log(`${i} is abbreviation for ${j}`);
}

const myObj={
    1:"PUBG",
    2:"COD",
    3:"RDR2"
}
for (const key in myObj) {
    // console.log(`${key} stands for ${myObj[key]}`);
}

const obj=[
    {
        lngName:"Python",
        lngFN:"py"
    },{
        lngName:"C++",
        lngFN:"cpp"
    },{
        lngName:"JavaScript",
        lngFN:"js"
    },{
        lngName:"C",
        lngFN:"c"
    }
]

obj.forEach((item)=>{
    // console.log(`Language ${item.lngName} has file name by ${item.lngFN}`);
})

const arr=[0,1,2,3,4,5,6,7,8,9,0]
const ans=arr.filter((item)=>{return item>5})
// console.log(ans);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const bookUser=books.filter((obj)=>{return obj.publish>1990})
// bookUser.filter()
// console.log(bookUser);

const ar=[1,2,3,4,5,6,7]
const br=ar.map((num)=>num*10+2).filter((num)=>num>50).map((num)=>num-69)
// console.log(br);

// const cr=ar.reduce((acc,curr)=>{console.log(`acc->${acc},curr->${curr}`); return acc+curr},-28)
// console.log(cr);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const total=shoppingCart.reduce((acc,item)=>{return acc+item.price},0)
console.log(total);
