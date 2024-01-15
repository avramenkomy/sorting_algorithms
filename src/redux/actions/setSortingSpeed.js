import { SPEED_ONCHANGE } from './types';


export function setSortingSpeed(value) {
  return {
    type: SPEED_ONCHANGE,
    payload: value,
  }
}