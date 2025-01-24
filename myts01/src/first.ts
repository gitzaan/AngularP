console.log("Helllo World with watch test now!!!")

function add(num1: number,num2 :number){
    return num1 + num2;
}

console.log(add(2,3))

//console.log(add('2','3'))

let myString: string = 'String Value';

myString = 'Modified Value';
//myString=9


//Type Inference

let number1 = 2;


//Tuple
const person:{
    name:string;
    age:number;
    hobbies:string[];
    role:[number,string];

} ={
    name:'Jack',
    age:30,
    hobbies:['Reading','Music'],
    role:[2,'admin']
}

console.log(person.name)


//any

let activities:any[];

activities=['Sport',2,true];
console.log(activities)