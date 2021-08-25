/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.preNums = [0];
    // 构造前缀和
    for (let i=1; i<=nums.length; i++) {
        this.preNums[i] = this.preNums[i - 1] + nums[i - 1]
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if (left > right || this.preNums.length < 2) {
        return 0;
    }
    left = left < 0 ? 0 : left;
    right = right >= this.preNums.length - 1 ? this.preNums.length - 2 : right;
    return this.preNums[right + 1] - this.preNums[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

