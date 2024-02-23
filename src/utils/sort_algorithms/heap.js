export default function heapSort(array, actions) {
  let size = array.length

  for (let i = Math.floor(size / 2 - 1); i >= 0; i--) {
    heapify(array, size, i, actions);
  }

  for (let i = size - 1; i >= 0; i--) {
    actions.push({id: 'swap', elems: [0, i]});
    [array[i], array[0]] = [array[0], array[i]];
    actions.push({id: 'setSorted', elems: [i]});
    heapify(array, i, 0, actions);
  }
}

function heapify(array, size, i, actions) {
  let max = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  actions.push({id: 'setActive', elems: [i]});

  if (left < size && array[left] > array[max]) {
    max = left;
  }

  if (right < size && array[right] > array[max]) {
    max = right;
  }

  if (max != i) {
    actions.push({id: 'swap', elems: [i, max]});
    [array[i], array[max]] = [array[max], array[i]];

    heapify(array, size, max, actions);
  }
}