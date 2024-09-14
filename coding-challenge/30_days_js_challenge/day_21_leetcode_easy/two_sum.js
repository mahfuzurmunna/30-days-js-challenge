/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

//time complexity O(n^2);
var twoSum = function(nums, target) {
    let result = [];
    for(let i = 0; i<nums.length;i++) {
        let j = i+1;
        
        while(j<nums.length) {
            if(nums[i] + nums[j] === target) {
                result = [i,j];
            } 
            j++;
        }
    }
    return result;
};

const nums = [3,2,4];
// console.log(twoSum(nums,6))

// O(n) solution using hashmap

var twoSumHash=  function (nums,target) {
    const visited = new Map();
    let result = [];

    for(let i = 0; i<nums.length;i++) {
        if(visited.has(target-nums[i])) {
         result = [nums.indexOf(target-nums[i]),i];
        } else {
            visited.set(nums[i],i);
        }
    }
    return result;
}

const arr = [2,7,11,15];

console.log(twoSumHash(arr,17))

