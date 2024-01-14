import { CREATE_ARRAY } from '../actions/types';

const ARRAY = [
  330, 492, 420, 381, 498, 482, 334, 378, 46, 293, 413, 33, 234, 196, 257, 0,
  33, 355, 57, 83, 335, 300, 65, 187, 422, 286, 116, 432, 283, 456, 157, 2, 1000
];

const initState = {
  array: ARRAY,
}


const arrayReducer = (state=initState, action) => {
  switch(action.type) {
    case CREATE_ARRAY:
      return { ...state, array: action.payload }
    default: return state;
  }
}

export default arrayReducer;
