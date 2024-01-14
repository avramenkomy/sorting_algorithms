import { CREATE_ARRAY } from './types';


export function setArray(length=10, min=0, max=1000) {
  let arr = [];

  for (let i = 0; i < length; i++) {
    const item = Math.floor(min + Math.random() * (1 + max - min));
    arr.push(item);
  }

  return {
    type: CREATE_ARRAY,
    payload: arr,
  }
}
