/*
 * @lc app=leetcode.cn id=26 lang=java
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }
        int slow = 0, fast = 1;
        for (; fast < nums.length; fast ++) {
            if (nums[slow] != nums[fast]) {
                slow += 1;
                nums[slow] = nums[fast];
            }
        }
        return slow + 1;
    }
}
// @lc code=end

