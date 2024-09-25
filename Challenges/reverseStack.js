function reverseStack(str){
    const stack = [];

    for(let char of str){
        stack.push(char)

    }
    let reveredString = "" ;
    
    while(stack.length > 0){
        reveredString += stack.pop()
    }
    return reveredString;
}

const OrginalWord = "Hello World"
const reverseValue = reverseStack("Hello World")
console.log(reverseValue);
