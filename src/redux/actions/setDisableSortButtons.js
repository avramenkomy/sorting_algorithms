import { SET_DISABLE_SORT_BUTTONS } from './types';


export function setDisableSortButtons(flag) {
  return {
    type: SET_DISABLE_SORT_BUTTONS,
    payload: flag,
  }
}
