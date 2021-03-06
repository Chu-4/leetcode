`题目：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
注意：给定 n 是一个正整数。`


`斐波那契数列，F(n)=F(n-1)+F(n-2)`


 var climbStairs = function(n) {
  let arr = [0,1,2]
  if (n < 3) {
      return arr[n]
  } else {
      for (i=3;i<=n;i++) {
          arr[i] = arr[i-1] + arr[i-2]
      }
      return arr[n]
  }
};
