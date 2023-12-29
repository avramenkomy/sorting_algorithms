import { SET_DARK_THEME, SET_LIGHT_THEME } from '../actions/types';

const initState = {
  mode: 'light',
}

const themeReducer = (state=initState, action) => {
  switch(action.type) {
    case SET_LIGHT_THEME:
      return { ...state, mode: 'light' }
    case SET_DARK_THEME:
      return { ...state, mode: 'dark' }
    default: return state;
  }
}

export default themeReducer;
