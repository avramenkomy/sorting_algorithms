import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import arrayReducer from './arrayReducer';
import stateReducer from './stateReducer';


const rootReducer = combineReducers({
  theme: themeReducer,
  array: arrayReducer,
  state: stateReducer,
  // ... all reducers connect here
});

export default rootReducer;
