//// program to count the number of words in a sentence.



//arrow functio to solve the problem
const countwords =(sentence)=>{
                       
    //avoid spaces and split 
    let word = sentence.trim().split(/\s+/)
///return  word variable length
    return word.length
 }

 
 // sentence to count the number of words
 const sentence= "welcome to the world of    imagination"

//console the program by calling the function
 console.log("counte words is :"+countwords(sentence))

 









