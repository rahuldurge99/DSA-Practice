function wordCount(para) {
    const paraLowercase = para.toLowerCase();
    let wordMap = {}
    const words = paraLowercase.split(" ");
    // you can use below regex as well 
    // /\s+/
    for (const word of words) {
        if (word in wordMap) {
            wordMap[word]++;
        } else {
            wordMap[word] = 1;
        }
    }

    return wordMap;
}

let para = "hello this is your boy boy is this rahul"
let result = wordCount(para);
console.log(result);


