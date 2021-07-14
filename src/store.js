import {createStore} from 'redux';

function posts(state = [], action) {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload.post];
    case 'REMOVE_POST':
      return state.filter(el => el.id !== action.payload.id);
    default:
      return state;
  }
}

const store = createStore(posts)


export default store;
