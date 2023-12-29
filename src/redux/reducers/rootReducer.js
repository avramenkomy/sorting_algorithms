import { combineReducers } from 'redux';
import themeReducer from './themeReducer';


const rootReducer = combineReducers({
  theme: themeReducer,
  // ... all reducers connect here
});

export default rootReducer;
