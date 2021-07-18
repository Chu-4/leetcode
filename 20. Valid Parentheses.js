`给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
 

示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
示例 4：

输入：s = "([)]"
输出：false
示例 5：

输入：s = "{[]}"
输出：true
 

提示：

1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成`

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let sArr = s.split('') 
    let left = []
    if (sArr.length < 2) {
        return false
    }
    for (let i=0;i<sArr.length;i++) {
        if (sArr[i]==='{'||sArr[i]==='['||sArr[i]==='(') {
            left.push(sArr[i])
        } else {
            let leftItem = left.pop()
            if (leftItem && ((sArr[i] === '}' && leftItem === '{') || (leftItem && sArr[i] === ']' && leftItem === '[') || (leftItem && sArr[i] === ')' && leftItem === '('))) {
                console.log('111')
            } else {
                return false
            }
        }
    }
    if (left.length > 0) {
        return false
    }
    return true
};
