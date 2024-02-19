export default function iteration(arr) {
  let actions = [];

  for (let i = 0; i < arr.length; i++) {
    actions.push({ id: 'setActive', elems: [i]});
  }

  return actions;
}
