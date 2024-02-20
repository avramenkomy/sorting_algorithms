/** Bubbles sorting algorithm */

export default function bubblesSort (arr) {
  let newArray = Array.from(arr);
  let actions = [];

  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray.length - i - 1; j++) {
      actions.push({ id: 'setActive', elems: [j, j + 1]});
      if (newArray[j] > newArray[j + 1]) {
        actions.push({ id: 'swap', elems: [j, j + 1] });

        [newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];
      }
    }
    actions.push({ id: 'setSorted', elems: [newArray.length - i - 1] });
  }

  return actions;
}
