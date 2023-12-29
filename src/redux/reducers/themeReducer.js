import { SET_DARK_THEME, SET_LIGHT_THEME } from '../actions/types';

const initState = {
  theme: 'light',
}

const themeReducer = (state=initState, action) => {
  switch(action.type) {
    case SET_LIGHT_THEME:
      return { ...state, theme: 'light' }
    case SET_DARK_THEME:
      return { ...state, theme: 'dark' }
    default: return state;
  }
}

export default themeReducer;
