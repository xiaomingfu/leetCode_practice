/* Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory. */
var removeDuplicates = function (nums) {
  let i = 1;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[j - 1]) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

console.log(removeDuplicates([1, 2, 2, 2, 2, 3, 3, 4]));
