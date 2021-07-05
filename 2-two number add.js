`给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 

示例 1：
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.

示例 2：
输入：l1 = [0], l2 = [0]
输出：[0]

示例 3：
输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
 

提示：
每个链表中的节点数在范围 [1, 100] 内
0 <= Node.val <= 9
题目数据保证列表表示的数字不含前导零`


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// l1和l2都是链表中的一个节点，sum为新创建的一个存储当前两个值相加和的结果链表
var addTwoNumbers = function(l1, l2) {
    let addOne = 0 // 相加后的进位
    let sum = new ListNode(0) // 初始化sum链表，此时为{val：0，next：null}
    let head = sum // sum会随着相加改变，保存sum链表的最开始位置
    while(l1 || l2 || addOne) {
        let v1 = l1 !== null ? l1.val : 0 // 判断两数位数不一致时用0补充
        let v2 = l2 !== null ? l2.val : 0
        let r1 = v1 + v2 + addOne
        addOne = r1 >= 10 ? 1 : 0
        sum.next = new ListNode(r1 % 10) // 将相加的结果（非进位位）添加到sum链表中，此时为{val:0, next：{val:(v1 + v2 + addOne) % 10， next：null}}
      
        // 上一位相加已经算完了，将三个数都挪向next进行下一位数的相加
        sum = sum.next
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next // 最后l1，l2一定会为null，用if判断是否存在l1或l2
    }
    return head.next //两数之和的链表从head.next开始
};
