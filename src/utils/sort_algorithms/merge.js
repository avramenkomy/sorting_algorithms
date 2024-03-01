function Merge(a, low, mid, high, actions, arr) {
  let b = new Array(high + 1 - low);
  let h;
  let i;
  let j = mid + 1;
  let k;
  h = low;
  i = 0;

  while (h <= mid && j <= high ) {
    actions.push({id: 'setActive', elems: [i, h, j]});
    if (a[h] <= a[j]) {
      b[i] = a[h];
      h++;
    } else {
      b[i] = a[j];
      j++;
    }
    i++;
  }

  if (h > mid) {
    actions.push({id: 'setActive', elems: [i]});
    for (k = j; k <= high; k++) {
      b[i] = a[k];
      i++;
    }
  } else {
    for (k = h; k <= mid; k++) {
      b[i] = a[k];
      i++;
    }
  }

  for (k=0; k <= high-low; k++) {
    if (k === b.length - 1) {
      for(let i = 0; i < b.length; i++) {
        const idx = arr.lastIndexOf(b[i]);
        actions.push({id: 'setElem', elems: [i, b[i]]});
      }
    }
    a[k + low] = b[k];
  }

  return a;
}

export default function MergeSort(arr, actions) {
  let array = Array.from(arr);

  function merge_sort(a, low, high, actions, arr) {
    if (low < high) {
      let mid = Math.floor((low + high) / 2);
      merge_sort(a, low, mid, actions, arr);
      merge_sort(a, mid+1, high, actions, arr);
      Merge(a, low, mid, high, actions, arr);
    }
  }

  let n = array.length;
  merge_sort(array, 0, n-1, actions, arr);

  actions.push({id: 'setActive', elems: []});
  for (let i = 0; i < array.length; i++) {
    actions.push({id: 'setSorted', elems: [i]});
  }

  return array;
}
