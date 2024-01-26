import { SET_ACTIVE } from './types';


export function setActive(active_arr_elem) {
  return {
    type: SET_ACTIVE,
    payload: active_arr_elem,
  }
}
