import { SET_SORTED } from './types';


export function setSorted(sorted_arr_elem) {
  return {
    type: SET_SORTED,
    payload: sorted_arr_elem,
  }
}
