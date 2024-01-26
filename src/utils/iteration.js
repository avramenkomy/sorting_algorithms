export function iteration(arr) {
  let actions = [];

  for (let i = 0; i < arr.length; i++) {
    actions.push({ id: 'setActive', elems: [i]});
    actions.push({ id: 'setSorted', elems: [i]});
  }

  return actions;
}
