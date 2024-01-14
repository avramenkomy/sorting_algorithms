import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import arrayReducer from './arrayReducer';


const rootReducer = combineReducers({
  theme: themeReducer,
  array: arrayReducer,
  // ... all reducers connect here
});

export default rootReducer;
