export default function CocktailSort(arr, actions) {
  let array = Array.from(arr);
  let left = 0;
  let right = array.length - 1;

  while (left < right) {

    for (let i = left; i < right; i++) {
      actions.push({id: 'setActive', elems: [i, i + 1]});

      if (array[i] > arr[i + 1]) {
        actions.push({id: 'swap', elems: [i, i + 1]});
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
    actions.push({id: 'setSorted', elems: [right]});

    for (let j = right; j > left; j--) {
      actions.push({id: 'setActive', elems: [j, j - 1]});

      if (array[j] < array[j - 1]) {
        actions.push({id: 'swap', elems: [j, j - 1]});
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      }
    }
    actions.push({id: 'setSorted', elems: [left]});

    left++;
    right--;
  }
}