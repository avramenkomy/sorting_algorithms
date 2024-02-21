/* ------------------ Первая реализация рабочая ---------------------------- */

// export default function quickSort(array) {
//   let arr = Array.from(array);
//   // Creating an array that we'll use as a stack, using the push() and pop() functions
//   let stack = [];
//   let actions = [];

//   // Adding the entire initial array as an "unsorted subarray"
//   stack.push(0);
//   stack.push(arr.length - 1);

//   // There isn't an explicit peek() function
//   // The loop repeats as long as we have unsorted subarrays
//   while(stack[stack.length - 1] >= 0){

//     // Extracting the top unsorted subarray
//     let end = stack.pop();
//     let start = stack.pop();

//     let pivotIndex = partition(arr, start, end, actions);

//     actions.push({id: 'setSorted', elems: [pivotIndex]});

//     // If there are unsorted elements to the "left" of the pivot,
//     // we add that subarray to the stack so we can sort it later
//     if (pivotIndex - 1 > start){
//       stack.push(start);
//       stack.push(pivotIndex - 1);
//     } else {
//       actions.push({id: 'setSorted', elems: [pivotIndex - 1]});
//     }

//     // If there are unsorted elements to the "right" of the pivot,
//     // we add that subarray to the stack so we can sort it later
//     if (pivotIndex + 1 < end){
//       stack.push(pivotIndex + 1);
//       stack.push(end);
//     } else {
//       actions.push({id: 'setSorted', elems: [pivotIndex + 1]});
//     }
//   }

//   return actions;
// }


/* ------------------ Вторая реализация рабочая ---------------------------- */

// function partition(arr, start, end, actions){
//   // Taking the last element as the pivot
//   const pivotValue = arr[end];
//   let pivotIndex = start;

//   for (let i = start; i < end; i++) {
//     actions.push({id: 'setActive', elems: [i, end]});

//     if (arr[i] < pivotValue) {
//       // Swapping elements
//       actions.push({id: 'swap', elems: [i, pivotIndex]});
//       [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
//       // Moving to next element
//       pivotIndex++;
//     }
//   }

//   // Putting the pivot value in the middle
//   actions.push({id: 'swap', elems: [pivotIndex, end]});
//   [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];

//   return pivotIndex;
// };



/* ------------------ Третья реализация рабочая ---------------------------- */

// export default function quickSort(arr, left, right, actions) {
//   if (left < right) {
//     const index = partition(arr, left, right, actions);
//     if (index + 1 < right) {
//       actions.push({id: 'setSorted', elems: [index + 1]});
//     }
//     if (index - 1 > left) {
//       actions.push({id: 'setSorted', elems: [index - 1]});
//     }
//     quickSort(arr, left, index - 1, actions);
//     quickSort(arr, index + 1, right, actions);
//   }
// }

// function partition(arr, left, right, actions) {
//   const pivotIndex = Math.floor((left + right) / 2);
//   const pivot = arr[pivotIndex];
//   let i = left;

//   for (let j = left; j < right; j++) {
//     actions.push({id: 'setActive', elems: [j, i, right]});
//     if (arr[j] < pivot) {
//       actions.push({id: 'swap', elems: [i, j]});
//       swap(arr, i, j);
//       i++;
//     }
//   }

//   actions.push({id: 'swap', elems: [i, right]});
//   swap(arr, right, i);
//   actions.push({id: 'setSorted', elems: [i, i - 1]});
//   return i;
// }

// function swap(arr, a, b) {
//   [arr[a], arr[b]] = [arr[b], arr[a]];
// }


/* ------------------ Четвертая реализация рабочая ------------------------- */

// export default function quickSort (array, actions) {
//   if (array.length === 0) return [];

//   let a = [];
//   let b = []
//   let pivot = array[0];

//   for (let i = 1; i < array.length; i++) {
//     actions.push({id: 'setActive', elems: [i]});

//     if (array[i] < pivot) {
//       // actions.push({id: 'swap', elems: [i, a.length]});
//       a[a.length] = array[i];
//     } else {
//       // actions.push({id: 'swap', elems: [i, a.length + 1 + b.length]});
//       b[b.length] = array[i];
//     }
//   }

//   return quickSort(a, actions).concat(pivot, quickSort(b, actions));
// }



/* ------------------ Пятая реализация рабочая ------------------------- */

function partition(array, left, right, actions) {
  let pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    actions.push({id: 'setActive', elems: [i,j]});
    while (array[i] < pivot) {
      i++;
    }

    while (array[j] > pivot) {
      j--;
    }

    if (i <= j) {
      actions.push({id: 'swap', elems: [i,j]});
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    }
  }

  return i;
}

export default function quickSort(array, left, right, actions) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right, actions);

    if (left < index - 1) {
      quickSort(array, left, index - 1, actions);
    } else {
      actions.push({id: 'setSorted', elems: [index - 1]});
    }

    if (index < right) {
      quickSort(array, index, right, actions);
    } else {
      actions.push({id: 'setSorted', elems: [index]});
    }
  }

  return array;
}
