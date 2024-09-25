function TwoSum(nums, target) {
    let numMap = {};

    for (let i = 0; i < nums.length; i++) {
        let response = target - nums[i]
        if (response in numMap && numMap[response] !== i) {
            return [numMap[response], i]
        }
        numMap[nums[i]] = i
    }
    return [];
}

let nums = [1, 2, 7, 11, 13]
let target = 9;

const result = TwoSum(nums, target)
console.log(result);
