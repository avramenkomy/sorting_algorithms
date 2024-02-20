export default function selectionSorting(array) {
  let newArray = Array.from(array);
  let actions = [];

  for (let i = 0; i < newArray.length; i++) {
    let min = i;

    for (let j = i + 1; j < newArray.length; j++) {
      if (newArray[min] > newArray[j]) {
        min = j;
      }

      actions.push({id: 'setActive', elems: [j, min]});
    }

    actions.push({ id: 'swap', elems: [i, min]});

    [newArray[i], newArray[min]] = [newArray[min], newArray[i]];

    actions.push({ id: 'setSorted', elems: [i]});
  }

  return actions;
}