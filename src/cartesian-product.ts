function cartesianProduct<T, P>(fArray: T[], sArray: P[]): (T | P)[][] {
  const result: (T | P)[][] = [];

  for (const fElement of fArray) {
    for (const sElement of sArray) {
      result.push([fElement, sElement]);
    }
  }
  return result;
}

export {};
