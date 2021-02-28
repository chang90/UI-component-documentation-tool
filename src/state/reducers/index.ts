import {combineReducers} from 'redux';
import cellReducer from './cellsReducer';
import bundleReducer from './bundlesReducer';

const reducer = combineReducers({
  cells: cellReducer,
  bundles: bundleReducer
})

export default reducer;

export type RootState = ReturnType<typeof reducer>;