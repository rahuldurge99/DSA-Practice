// 1. Convert string into array by using split() method
// 2. Reverse the array using reverse() method
// 3. Convert array into string by join() method

const reverseString = str => str.split("").reverse().join("");
console.log(reverseString("apple a day"))



const sameString= (str) =>{
    checkPalindrome = str.split("").reverse().join("");
    if (checkPalindrome === str) {
    console.log(`${str} it is a palindrome`);
    return checkPalindrome;
    }else{
       
       console.log(`${str} is not palindrome`);
       
    }
} 
sameString("apple")
sameString("NaN")

// 1.Convert number or integer into string { toString() }
// 2. Convert string into array by using split() method
// 3. Reverse the array using reverse() method
// 4. Convert array into string by join() method
// 5. Convert string into number { parseInt() }
// 6. Return the number
numReverse = (num)=> {
    const reverseNum = num.toString().split("").reverse().join("")
    return parseInt(reverseNum) * Math.sign(num)
    
}

console.log(numReverse(-123));
