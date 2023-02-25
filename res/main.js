// comments can make code readable

/*
comments can make code readable
easy to reuse and informative
*/

// const a = "string"
// let b = true
// let c = undefined
// let d = null

// console.log(typeof(a))
// console.log(typeof(b))
// console.log(typeof(c))
// console.log(typeof(d))

// // const aa;
// // let ab;
// // let ac;
// // let ad;

// const firstName = 'Assil';
// const lasttName = 'Kherfi';
// let online = true;
// let age = 34;
// const country = 'Algeria';

// const myAge = 25
// const yourAge = 56

// console.log("I am " + myAge  + " years old" )
// console.log("You are " + yourAge  + " years old" )

// let A = parseInt( prompt(" Enter the first side"))
// let B = parseInt (prompt(" Enter the seconde side"))

// // console.log(A);
// // console.log(typeof(A));

// const triangle = (A, B)=>{
//     return (0.5 * A * B)

// }

// console.log(triangle(A, B))

// let C = parseInt(prompt(" Enter the third side"))

// const perimeter = (A, B, C)=>{
//          return (A + B + C)
//         }
// console.log(perimeter(A, B, C))

// const triangle_area =(A, B)=>{
//     return (A * B)
// }
// console.log(triangle_area(A, B))

// const triangle_perimeter =(A, B)=>{
//     return (2*(A + B))
// }
// console.log(triangle_perimeter(A, B))

// let r = parseInt (prompt(" Enter the r"))
// const pi = 3.14
// const circle_area = (r)=>{
//     return (pi * r * r)
//    }
// console.log(circle_area(r))

// const circumference = (r)=>{
//     return (pi * 2 * r)
//    }
// console.log(circumference(r))

// let Age = parseInt (prompt(" Enter your age"))
// if (Age>=18){
//     console.log('You are old enough to drive');
// } else {console.log('You are teenager')}

// // const myAge = 25

// if (myAge > Age){
//     console.log('I am older than you')
// } else if (myAge < Age){
//     console.log('You are older than me');
// } else {
//     console.log('We have the same age');
// }

// let even = 6
// const two = 2
// if (even%two == 0){
//     console.log('the nember is even')
// }
// else {
//     console.log('the nember is odd')
// }

// const v=10;
// if (v>=5){
//     console.log('v bigger then 5');
// }  else if(v<=3){
//     console.log('v bigger then 3');
// }else  {
//     console.log('v between 3 and 5')
// }

// switch(v){
//     case 10:
//         console.log('v equal 10');
//         break
//     case 5:
//         console.log('v equal 5');
//         break
//     default:
//         console.log('v equal  10');
//         break
// }

// v ==10 ? console.log("v equal to 10") : console.log("v is not equal to 10")

// const arr1=[
//            {name:"Assil", age:35},
//            {name:"Nélia", age:4},
//            {name:"Aksel", age:2},
//         ];

// for (let index = 0; index < arr1.length -1 ; index++){
//     console.log(arr1[index].name);
// }

// const person = {
//     name:"Assil",
//     age:34
// }

// for (const propreties in person){
//     console.log(person[propreties])
// }

// while(v < 10 && v > 0){
//     console.log(v);
//     v--;
// }

// let booll = true;

// do{
//     console.log(v);
//     booll=false;
// } while (booll == true)

// const items =[
//     {name : "TV", price : 200},
//     {name : "PS4", price : 100},
//     {name : "Phone", price : 1000},
//     {name : "Table", price : 50},
//     {name : "Bycicle", price : 10},
// ]

// console.log(items)

// const itemsName = items.map((item)=>{
//     return item.name
// });
// console.log(itemsName)

// const displayItems = items.forEach(function(item) {
//     console.log(item)
// });

// const expensivePrice = items.filter((item)=>{
//     return item.price > 50 ;
// })
// console.log(expensivePrice)

// const totalPrice = items.reduce((total, item)=>{
//     return item.price + total
// },0)
// console.log(totalPrice)

// const newItems = items.concat([{name : "Tableau", price : 30}])
// console.log(newItems)

// const phoneItem = items.find((item)=>{
//     return item.name ==="Phone"
// })
// console.log(phoneItem)

// const someItems = items.some((item)=>{
//     return item.price >= 100
// })
// console.log(someItems)

// const everyItems = items.every((item)=>{
//     return item.price >= 100
// })
// console.log(everyItems)

// const animals = ["ant", "bison", "camel", "duck", "elephant"]

// console.log(animals.slice(2))
// console.log(animals.slice(2,4))
// console.log(animals.slice(1,5))
// console.log(animals.slice(-2))
// console.log(animals.slice(2,-1))
// console.log(animals.slice())

// const months = ["Jan", "March", "April", "June"]
// const newMonths = months.splice(2,1,"Septembre", "December")
// console.log(months)

// let numbers = [0,1,2,50,10,20,30];
// numbers.sort(function(a, b){
//     if (a>b) return 1;
//     if (a<b) return -1;
//     return 0
// })
// console.log(numbers)

// const emptyArr = []
// const fiveEle = [2, 4, 6, 3, 9]
// console.log("My five elements", fiveEle)
// console.log("length of my elements is", fiveEle.length)

// console.log("The first element is",fiveEle.slice(0, -4))
// console.log("The middle element is",fiveEle.slice(2, -2))
// console.log("The last lement is",fiveEle.slice(-1))

// const mixtDataType = ["Tree", 30, "mac", 3.5, "35", true]
// console.log(mixtDataType.length)

// const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
// console.log(itCompanies)
// console.log("length of itCompanies is", itCompanies.length)
// console.log("The first company is",itCompanies.slice(0, -6))
// console.log("The middle company is",itCompanies.slice(3, -3))
// console.log("The last company is",itCompanies.slice(-1))

// const squar = fiveEle.map((item)=>{
//     return item ** item
// });
// console.log("squar of my five elements is", squar)

// const even = fiveEle.filter((item)=>{
//     return item%2 == 0
// })
// console.log("Event number in my five elements is", even)

// const fiveEletotalElem = fiveEle.reduce((total, item)=>{
//     return item + total
// },0)
// console.log("The total of my five elements is", fiveEletotalElem)

// fiveEle.sort(function(a, b){
//     if (a>b) return 1;
//     if (a<b) return -1;
//     return 0
// })
// console.log(fiveEle)

// const findElem = fiveEle.find((item)=>{
//     return item === 2
// })
// console.log(findElem)

// for (let i = 0; i<= 10;i++){
//     console.log(i)
// }

// let i = 10
// while(i <= 10 && i > 0){
//     console.log(i);
//     i--;
// }

// let s = 0

// do {
//     console.log(s);
//     s++;
// } while (s<=10);

// for (let i=0; i<=10;i++){
//     console.log(`${i} * ${i} = ${i*i}`)
// }

// let e = 100
// while(e > 0 && e <= 100){
//     if (e % 2 == 0){console.log(e)}
//     e--
// }

// while(e > 0 && e <= 100){
//     if (e % 2 != 0){console.log(e)}
//     e--
// }

// const alph = ["A","B","C","D"]
// const num = [1,2,3,4,5,6];
// const[v1, ,v2, ...rest] = alph
// console.log(v1)
// console.log(v2)
// console.log(rest)

// const table = {
//     height: 2000,
//     width : 300,
// }
// const{height} = table;

// const{width: wi} = table;

// const ft = ({Name, Age})=>{
//     console.log(`My name ${Name} and my age ${Age}`)
// };

// const ft = ({Name, ... obj})=>{
//     console.log(`My name ${Name} and my age ${obj.Age}`)
//     console.log(obj)
// };
// const pr = {
//     Name:'Assil',
//     Age: 34
// }
// ft(pr)

// const adventurer = {
//     name:"Alice",
//     cat:{
//         name:"Didi"

//     }
// }

// const dogName = adventurer.dog?.name;
// console.log(dogName)

// console.log(adventurer.someNonEsixtentMethode?.())

const firstDiv = document.querySelector(".name");
console.log(firstDiv);

const firstDivAll = document.querySelectorAll(".name");
console.log(firstDivAll);

const ourDiv = document.getElementsByClassName("name");
console.log(ourDiv);

firstDiv.innerText = "Assil";
firstDiv.innerText = firstDiv.innerText + " Assil";

ourDiv[1].innerHTML = ourDiv[1].innerHTML + "<h1>Hello</h1>";

const att1 = firstDiv.getAttribute("class");
console.log(att1);

firstDiv.setAttribute("id", "123");
console.log(firstDiv.getAttribute("id"));

firstDiv.style.backgroundColor = "red";
