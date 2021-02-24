import {combineReducers} from 'redux';
import cellReducer from './cellsReducer';

const reducer = combineReducers({
  cells: cellReducer
})

export default reducer;

export type RootState = ReturnType<typeof reducer>;