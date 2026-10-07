//---------- START -----------
console.log("Hello");

//-------------- js  Variabls Diclear(var,let,const) ---------------

{
    var name ="Lahiru";
    let age ="30";

    console.log(age);
}

console.log(name);
//console.log(age);

//Ekapaarak hadapu variable ekakata values assign karanna uluvan...
let age = 50;
console.log(age);

age = 18;
console.log(age);

//Ekapaarak hadapu variable ekakata aayeth values assigning karanna baa (const)waladi...
const number = 1;
console.log(number);

//number = 100;
//console.log(number); - Ee nisaa mehema aaye assign karanna baaa

//----- Array List -----
//let wakladi array list ekakata unath wanama String ekak  assign karothn eeka aasign karagannava
let customerList = ["Saman","pasindu","Lahiru"];
console.log(customerList);

customerList= "Mokada wenne";
console.log(customerList);

//Apita nishchithava ekama arrylist ekak oona nisa eeka wenas karanne nathuwa valueas add karann "puch" use karanava
const custommerList = ["Ruvishan","Sasindu","Malika"];
console.log(custommerList);

custommerList.push("Kalhara");
console.log(custommerList);


//---------- Array Methors ----------

//--------- Puch Methord ----------
const numbers = [];

numbers.push(2);
console.log(numbers);
numbers.push(3);
numbers.push(5);
numbers.push(6);
numbers.push(8);
console.log(numbers);


//--------- Revese Methord ----------
numbers.reverse();
console.log(numbers);

//--------- Filter ----------

const productList =[
    {name:"bun",inStock:true,price: 100},
    {name:"milk",inStock:true,price: 200},
    {name:"egg",inStock:false,price: 300},
    {name:"bread",inStock:true,price: 400},
    {name:"butter",inStock:false,price: 500},
    {name:"chees",inStock:false,price: 600},
];

console.log(productList);

let inStockProduckts = 
    productList.filter(product => product.inStock == true);

console.log(inStockProduckts);

//--------- Funtions ---------

// - 1 methord
function addNumbers(num1,num2){
    return num1+ num2;
}
console.log(addNumbers(4,5));


// - 2 methord
let getSum = function(num01,num02){
    return num01 + num02;
}
console.log(getSum(5,8));


// - 3 methord arrow funtion
let getTotal = (num1,num2) => {
    return num1+num2;
}
console.log(getTotal(9,5));


// - 4 method
(num01,num02) => {
    return num01+num02;
}
console.log(getTotal(2,5));

// Arrow funtion with single parameter
let tetValue = tetValue=>{
    return tetValue;
}
console.log(tetValue("Hello Js"))