///reverse the order of words in a sentence but keeps the words intact

//sentence to reverse
const sentence="hello world"


const reverseWords=(sentence)=>{
     //split the sentence ,reverse and join
     return sentence.split(" ").reverse().join(" ")
}

//console the program by calling the variable name
console.log(reverseWords(sentence)); 



