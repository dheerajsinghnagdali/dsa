function climbingStaircase(n: number) {
  const numOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2];
  }
  return numOfWays[n - 1];
}

export {};
