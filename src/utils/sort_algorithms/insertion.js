export default function insertionSort(arr, actions) {
  let newArray = Array.from(arr);

  for (let i = 1; i < newArray.length; i++) {
    let current = newArray[i];
    let j = i - 1;

    while (j >= 0 && newArray[j] > current) {
      actions.push({ id: 'setActive', elems: [i, j, j+1]});
      actions.push({id: 'swap', elems: [j, j+1]});
      newArray[j + 1] = newArray[j];
      j--;
    }

    newArray[j + 1] = current;
  }

  actions.push({ id: 'setActive', elems: []});
  for (let i = 0; i < newArray.length; i++) {
    actions.push({id: 'setSorted', elems: [i]});
  }

  return newArray;
}