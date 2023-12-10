/** Bubbles sorting algorithm */

export function bubblesSort (arr) {
  let newArray = Array.from(arr);

  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray.length - 1; j++) {
      if (newArray[j] > newArray[j + 1]) {
        [newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];
      }
    }
  }

  return newArray;
}
