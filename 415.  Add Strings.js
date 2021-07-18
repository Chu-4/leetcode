`给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

 

提示：

num1 和num2 的长度都小于 5100
num1 和num2 都只包含数字 0-9
num1 和num2 都不包含任何前导零
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。`

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let arr1 = num1.split('')
    let arr2 = num2.split('')
    let sum = []
    let addOne = 0
    while (arr1.length > 0 || arr2.length > 0) {
        let v1 = Number(arr1.pop() || 0)
        let v2 = Number(arr2.pop() || 0)
        if (v1+v2+addOne>=10) {
           sum.unshift((v1+v2+addOne)-10)
           addOne = 1
        } else {
            sum.unshift(v1+v2+addOne)
            addOne = 0
        }   
    }
    if (addOne === 1) {
        sum.unshift(addOne)
    }
    return sum.join('')
};
