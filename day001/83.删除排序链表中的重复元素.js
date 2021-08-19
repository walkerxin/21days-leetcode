/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    // 使用快慢指针技巧 - [改进]·最后才断开后面重复的
    var slow = head, fast = head ? head.next : null;
    while (fast) {
        if (slow.val !== fast.val) {
            slow.next = fast;
            slow = fast;
        }
        fast = fast.next
    }
    slow.next = null;
    return head;
};
// @lc code=end

