import { SET_DARK_THEME, SET_LIGHT_THEME } from './types';

export function setTheme(mode) {
  return {
    type: mode === 'dark' ? SET_DARK_THEME : SET_LIGHT_THEME
  }
}
