//write a program to find the product of all digits in a number

// number to check
const number = 345;


 //arrow function to check the program
const productOfDigits =(number)=>{
    let product = 1;
    while (number > 0) {
     // Extract the last digit and multiply
        product *= number % 10;
       // / Remove the last digit
        number = Math.floor(number / 10); 
    }
    return product;
}
//console the program by calling the variable name along with pass the parameter
console.log("Product of digits:", productOfDigits(number)); 





