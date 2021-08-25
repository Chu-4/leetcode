`
给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

 

示例 1：


输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。
示例 2：

输入：grid = [[1,2,3],[4,5,6]]
输出：12
 

提示：

m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 100

`

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length
    let n = grid[0].length
    if (m === 0 || n === 0) {
        return 0
    }
    let sum = [[grid[0][0]]]
    for(let i=1;i<m;i++) {
        sum[i] = []
        sum[i][0] = sum[i-1][0] + grid[i][0]
    }
    for(let j=1;j<n;j++) {
        sum[0][j] = sum[0][j-1] + grid[0][j]
    }
    for(let x=1;x<m;x++) {
        for(let y=1;y<n;y++) {
            sum[x][y] = Math.min(grid[x][y] + sum[x-1][y], grid[x][y] + sum[x][y-1])
        }
    }
    return sum[m-1][n-1]
};
