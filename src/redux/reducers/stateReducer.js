import { SET_DISABLE_SORT_BUTTONS, STOP_SORTING } from '../actions/types';

const initState = {
  sortButtonsDisable: false,
  stopSorting: false,
}


const stateReducer = (state=initState, action) => {
  switch(action.type) {
    case SET_DISABLE_SORT_BUTTONS:
      return { ...state, sortButtonsDisable: action.payload }
    case STOP_SORTING:
      return { ...state, sortButtonsDisable: false, stopSorting: action.payload }
    default: return state;
  }
}

export default stateReducer;
