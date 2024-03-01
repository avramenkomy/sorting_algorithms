import {
  CREATE_ARRAY, ARRAY_ONCHANGE, SPEED_ONCHANGE, SET_ACTIVE, SET_SORTED,
} from '../actions/types';

const ARRAY = [
  330, 492, 420, 381, 498, 482, 334, 378, 46, 293, 413, 33, 234, 196, 257, 0,
  33, 355, 57, 83, 335, 300, 65, 187, 422, 286, 116, 432, 283, 456, 157, 2, 1000
];

const initState = {
  array: ARRAY,
  speed: 250,
  active: [],
  sorted: [],
  max: 1000,
}


const arrayReducer = (state=initState, action) => {
  switch(action.type) {
    case CREATE_ARRAY:
      return { ...state, active: [], sorted: [], array: action.payload, max: Math.max(...action.payload) }
    case ARRAY_ONCHANGE:
      return { ...state, array: action.payload }
    case SET_ACTIVE:
      return { ...state, active: action.payload }
    case SET_SORTED:
      return { ...state, sorted: [ ...state.sorted, ...action.payload ] }
    case SPEED_ONCHANGE:
      return { ...state, speed: action.payload }
    default: return state;
  }
}

export default arrayReducer;
