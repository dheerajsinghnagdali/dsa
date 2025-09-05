export function linearSearch<T>(array: T[], n: T): boolean {
  for (const num of array) {
    if (num === n) {
      return true;
    }
  }
  return false;
}
