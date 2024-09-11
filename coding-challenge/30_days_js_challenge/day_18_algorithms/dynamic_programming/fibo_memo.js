function fibonacciMemo(n) {
  if (n <= 1) return n;
  let memo = {};

  if (n in memo) {
    return memo[n];
  }
  memo[n] = n;
  return fibonacciMemo(n - 2) + fibonacciMemo(n - 1);
}

console.log(fibonacciMemo(7))
