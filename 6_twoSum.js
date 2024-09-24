
const twoSum = (arr, target) => {
for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {
      
        num = arr[i] + arr[j]
        if (num === target) {
            return [i, j]
        }
       }
       
        
    }
    return [ ]
}

const res = twoSum([1, 2, 7, 11 , 25], 9)
console.log(res);

