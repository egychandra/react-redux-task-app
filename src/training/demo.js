import { createStore } from 'redux';
import { status, sort } from './actions/index';
import myReducer from './reducers/index';

const store = createStore(myReducer);
console.log('Default', store.getState());

// Perubahan status
store.dispatch(status());
console.log('TOGGLE_STATUS', store.getState());

// Mengurutkan name Z-A
store.dispatch(sort({
  byName: 'name',
  byValue: -1
}));
console.log('SORT', store.getState());
