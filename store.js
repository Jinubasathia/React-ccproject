import { createStore } from 'redux';

const initialState = {
  searchHistory: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SEARCH':
      return {
        ...state,
        searchHistory: [...state.searchHistory, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
