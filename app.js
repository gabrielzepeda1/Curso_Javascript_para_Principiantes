// tipos de datos 

"Hello World" // string 

1000000 // number 
-2.3 // number

//boolean 
true 
false 


//array 
['joe', 'ryan', 'martha']
[ 1, 2, 3]
[true, false, true, false]

//object  

{ 
    "username" ; 'gabriel', 
    "score" ; 100, 
    "hours" ; 10, 
    "professional" ; true
}




//// VARIABLES 

var nameuser = "gabriel" 
let lastname = "zepeda" 

nameuser = "pepe" 

const PI = 3.1415

console.log(PI) 


// camelCase
// let userName = 'gordon'

// let numberOne = 60; 
// let numberTwo = 100; 

// let result = numberOne + numberTwo 

// console.log(result)

///// 

let passwordDB = 'pepe123' 

let input = 'pepe123' 

let result2 = input == passwordDB; 

if (result2 == true) { 
    console.log('Login Correcto')
} else { 
    console.log('Contraseña incorrecta');
}

//// 


let score = 70; 

if (score > 30) { 
    console.log('You need to practice more'); 

} else if (score > 15)  {
    console.log('Estas mejorando'); 
} else  {
    console.log('You need to follow this tutorial')
}

let typeCard = 'Credit Card' 

switch(typeCard) {  
    case 'Debit Card' : 
        console.log('This is a debit card'); 
        break; 
    case 'Credit Card': 
        console.log('This is a credit card'); 
        break; 
    default: 
        console.log('No Card'); 
    
}


////////////


let count = 0; 

while(count < 50) { 
    console.log(count); 
    count++ 
}


///// 


let names = ['ryan', 'joe', 'john', 'mario']; 

console.log(names)
console.log(names.length)


for (let i = 0; i < names.length; i++) { 

    console.log(names[i])
}



////// FUNCTION 

function greeting(name) { 
    console.log('Hello');
    console.log(name) 
}

greeting('Gabriel'); 


function add(n1, n2) { 
    console.log(n1, n2)
}

add(3,2)