export default function swap(arr, i, j) {
  let new_array = Array.from(arr);

  [new_array[i], new_array[j]] = [new_array[j], new_array[i]];

  return new_array;
}
