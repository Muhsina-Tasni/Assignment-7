//program to count the number of digits in a given number

       //store the value to check
const value = 10
       //change the value into string 
const valueLength = value.toString().length


     //if else condition to check the number og digit in a given number
if ((typeof value !== 'number' )|| (isNaN (value))){
    console.log('It is not a number, please enter a valid number');
}else{
    console.log("Number of digits:", valueLength);
}


