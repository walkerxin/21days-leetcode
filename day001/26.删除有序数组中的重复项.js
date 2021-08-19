/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // 使用快慢指针技巧
    if (!nums || nums.length === 0) {
        return 0;
    }
    var slow = 0, fast = 1;
    for (; fast < nums.length; fast ++) {
        if (nums[slow] !== nums[fast]) {
            slow += 1;
            nums[slow] = nums[fast];
        }
    }
    return slow + 1;
};
// @lc code=end

