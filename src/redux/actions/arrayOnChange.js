import { ARRAY_ONCHANGE } from './types';


export function arrayOnChange(array) {
  return {
    type: ARRAY_ONCHANGE,
    payload: array,
  }
}