// console.log("Hello World");
// //reinitialize and redeclare
// //global scope
// var a;
// a=10;
// var a;
// a=20;
// //reinitialize
// let b=10;  //block scope
// //le;  //block scope
// console.log(a);
// console.log(b);
// console.log(c);t b;
// b=20;
// //can't redeclare or reinitialize
// const c=30

//Data types
//primitive
// var num=10;  //number
// var str="thanu"; //`` '' ""  //string
// var bool=true;  //boolean
// var un;//undefined
// var nu=null;  //object
// var big=123456789079n;  //bigint
// var symbol=Symbol('li'); //symbol

// console.log(typeof num)
// console.log(typeof str)
// console.log(typeof bool)
// console.log(typeof un)
// console.log(typeof nu)
// console.log(typeof big)
// console.log(typeof symbol)

// var arr=[1,2,3,4,5] //array
// console.log(typeof arr);

// var Obj={
//     name:"revanth",
//     dept:"ds"
// }
// console.log(Obj);
// console.log(typeof Obj)

// //arithmatic operator 
// var a=10;
// var b="2";
// console.log(a+b)
// console.log(a-b)
// console.log(a%b)
// console.log(a*b)
// console.log(a**b)
// //relational operators
//  var a=10
// var b=10
// console.log(a==b) 
// console.log(a===b)
// console.log(a!=b)
// console.log(a!==b)
// console.log(a>b)
// console.log(a<b)
// console.log(a<=b)
// console.log(a>=b)

// //logical
// var a=true;
// var b=true;
// console.log(a&&b)
// console.log(a||b)
// console.log(!b)

//control statements
//conditional statements(if,if else..,else if,switch)
//if(even)
// var a=10;
// if(a%2===0){
//     console.log("Even");
// }
// //if else(odd or even)
// if(a%2===0){
//     console.log(`${a} is even`);
// }
// else{
//     console.log(`${a} is odd`);
// }
// //else...if
// var marks=80;
// if(marks>90)
// {
//     console.log("O+ Grade")
// }
//  else if(marks>80)
// {
//     console.log("A Grade")
// }
//  else if(marks>70)
// {
//     console.log("B Grade")
// }
// else{
//     console.log("Fail")
// }

//Ternary operator (condition?true:false)
// var a=5;
// const result=(a%2===0)? `${a} is even`:`${a} is odd`;
// console.log(result);
// var m=9
// 5;
// const Grade=(m>90)?`O grade`:(m>80)?`A grade`:(m>70)?`pass`:`Fail`;
// console.log(Grade);

// var day=6
// switch(day)
// {
// case 1:{
//    console.log("Sunday");
//         break;
// }
// case 2:
//     {
//         console.log("Monday");
//         break;
//     }
// case 3:
// {
//     console.log("Tuesday");
//     break;

// }
// case 4:{
//    console.log("Wednesday");
//         break;
// }
// case 5:
//     {
//         console.log("Thursday");
//         break;
//     }
// case 6:
// {
//     console.log("Friday");
//     break;

// }
// case 7:
// {
//     console.log("Saturday");
//     break;

// }
// default:
//     {
//         console.log("Invalid Day");
//     }
// }
//for loop

// for (let i=0;i<=10;i++)
// {
//     console.log(i);
// }
// //while loop
// var num=1234;
// var count=0;
// while(num>0){
//     count++;
//     num=Math.floor(num/10)
   
// }
// console.log(count);

//normal function 
// function add()
// {
//     var a=10;
//     var b=20;
//     console.log(a+b);
// }
// add();
// //with parameter
// function add(a,b)
// {
//     console.log(a+b);
// }
// add(10,20);

// //with return type
// function add(a,b)
// {
//     return a+b;
// }
// var result=add(10,20);
// console.log(result);

//arrow function (ES6)
// var add=()=>{
//     console.log("I am Arrow funtion");
// }
// add();

//with parameter

// var add=(a=0,b=0)=>
// {
//     console.log(a+b);
// }
// add(10,20);

//with return
// var add=(a,b) =>
// {
//     return a+b;
// }
// console.log(add(10,20));

//call back function
// var add = (a, b, demo) => {
//     var c=a+b;
//     demo(c);
// }

// var result = (res) => {
//     console.log(res);
// }

// add(10, 20, result);

//spread operator(...)
// var arr=[1,2,3];
// var arr2=[...arr,4,5,6];
// console.log(arr);
// console.log(arr2);

// //Destructuring operator(ES6)
// var [m1,m2,m3,m4,m5]=[99,89,79,69,90]; //Array
// console.log(m1);
// console.log(m2);
// console.log(m3);
// console.log(m4);
// console.log(m5);

// var{name,age,dept,contact}={
//     name:"putti",
//     age:18,
//     dept:["DS","CS"],
//     contact:{
//         mobile:9876543210,
//         mail:'vyshnavi26@gmail.com'
//     }
// }
// console.log(name);
// console.log(age);
// console.log(dept);
// console.log(contact);

//for-in and for-of(loops)
//for..in
// var arr=[10,20,30,40];
// for(let i in arr){
//     console.log(i,arr[i]);
// }
// var obj={
//     name:"sree",
//     age:1,
//     isActive:true
// }
// for(let key in obj){
//     console.log(key,obj[key])
// }

//for...of(ES6)
// var arr=[10,20,30,40];
// for(let val of arr){
//     console.log(val);
// }
//forEach(ES6)
// arr.forEach((val,index)=>{
//     console.log(val,index);
// })

// var arr=[1,2,3,4,5];
// //Map
// var double=arr.map((val)=>(val*2));
// console.log(double)


// //Filter
// var even=arr.filter((val)=>(val%2===0));
// console.log(even);

// //Reducer
// var total=arr.reduce((sum,val)=>(sum+val),0);
// console.log(total);

// var result=arr.map((val)=>val**2).filter((val)=>val%2===0).reduce((sum,val)=>(sum+val),0);
// console.log(result);


// //Hoisting
// //var a;
// console.log(a);
// var a=10;
// //For let & const Hosting not possible


// add(); //function hoisting
// function add(){
//     console.log(10+20);
// }

//scope

//Global scope
//var
// var a=10; //Global scope
// if(true){
//     var b=20; //Block scope
// }
// console.log(a);
// console.log(b);

//Block scope
//let
// let a=10; //Global scope
// if(true){
//     let b=20; //Block scope
// }
// console.log(a);
// console.log(b);

//const
const i=10; //Global scope
if(true){
    const j=20; //Block scope
}
console.log(i);
console.log(j);



