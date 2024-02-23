export default function shellSort(arr, actions) {
  let newArray = Array.from(arr);
  let n = newArray.length;
  let gap = Math.floor(n / 2);

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      let temp = newArray[i];
      let j = i;

      while (j >= gap && newArray[j - gap] > temp) {
        actions.push({id: 'setActive', elems: [i, j]});
        newArray[j] = newArray[j - gap];
        actions.push({id: 'swap', elems: [j, j-gap]});
        j -= gap;
      }
      newArray[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }

  actions.push({id: 'setActive', elems: []});

  for (let i=0; i< newArray.length; i++) {
    actions.push({id: 'setSorted', elems: [i]});
  }

  return newArray;
}