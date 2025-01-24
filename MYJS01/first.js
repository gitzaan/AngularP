console.log("Helllo World!!!")

function add(num1,num2){

    if(typeof num1 =="number" && typeof num2 == "number")
        return num1 + num2;

    else
        return +num1 + +num2;
}
let num =3;
let jum =4;
console.log(add(num,jum));

console.log(add('2','3'))

var number = 10;
console.log(number);


numer ="Fowzaan";

console.log(numer);

console.log(add(numer , "Fowzaan"))

// Problem with Javascript is that we need to write additional code to handle differnt type scenarios, making the code complex. TS is therefore needed to acheive type safety easily.
