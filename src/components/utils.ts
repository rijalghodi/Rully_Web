export function convertToGroupedArray<T>(
  originalArray: T[],
  n?: number,
): T[][] {
  return originalArray.reduce((accumulator, currentValue, index) => {
    n = n ?? 5;
    // Determine the current chunk index
    const chunkIndex = Math.floor(index / n);

    // If the chunk array for the current index doesn't exist, create it
    if (!accumulator[chunkIndex]) {
      accumulator[chunkIndex] = [];
    }

    // Push the current value into the chunk array
    accumulator[chunkIndex].push(currentValue);

    return accumulator;
  }, [] as T[][]);
}
