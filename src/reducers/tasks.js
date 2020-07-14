import * as types from '../constants/ActionTypes';

let s4 = () => { // Fungsi untuk membuat unique id, setiap s4 berisi 4 karakter baik integer maupun number
  return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
};

let generateID = () => { // Fungsi untuk generate unique id.
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

let data = JSON.parse(localStorage.getItem('tasks'));

let initialState = data ? data : [];

let myReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_TASK:
      // console.log(action);
      let newTask = {
        id: generateID(),
        name: action.task.name,
        status: action.task.status === 'true' ? true : false
      }
      state.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    default: return state;
  }
}

export default myReducer;
