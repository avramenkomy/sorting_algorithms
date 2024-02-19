export default function swap(arr, i, j) {
  let newArray = Array.from(arr);

  [newArray[i], newArray[j]] = [newArray[j], newArray[i]];

  return newArray;
}
