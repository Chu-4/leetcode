`
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

 

示例：
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层序遍历结果：

[
  [3],
  [9,20],
  [15,7]
]

`

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// 层序遍历即广度优先遍历，利用队列先进先出判断，当队列为空时结束
var levelOrder = function(root) {
    let res = []
    if (!root) {
        return res
    }
    let queue = [] // 队列
    let node = root
    queue.push(node)
    while(queue.length!==0) {
        res.push([])
        let levelSize = queue.length // 当前层级的所有元素
        for(let i = 0;i<levelSize;i++) {
            node = queue.shift()
            if (node) {
                res[res.length -1].push(node.val)
                if (node.left) queue.push(node.left)
                if (node.right) queue.push(node.right)
            }
        }
    }
    return res
};
