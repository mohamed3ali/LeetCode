/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
    let index, left = 0;
    while (left < nums.length - 1) {
        index = nums.indexOf(target-nums[left],left+1)
        if (index != -1) return [left, index];
        left++;
    }
};
