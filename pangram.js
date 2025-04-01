/// check the given sentence is  a pangram or not

//store the sentence to check
const sentence= "The quick brown fox jumps over the lazy dog"


const checkPangram=(sentence)=>{
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    //convert the sentence to lower case
        const lowerCased = sentence.toLowerCase();
    
        for (let char of alphabet) {
            if (!lowerCased.includes(char)) {
                return "It is not a pangram";// If any letter is missing, return it is nt pangram
               
            }
        }
        //if all letters found,return it is pangram
         return 'the sentence is a pangram'
        
}


//console the program by calling the varible name
console.log(checkPangram(sentence))