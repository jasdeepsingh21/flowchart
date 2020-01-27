import { createStore } from "redux";
// import * from './reducers';
const CREATE_SQUARE = "CREATE_SQUARE";
// const CREATE_TRIANGLE = "CREATE_TRIANGLE";
// const CREATE_CIRCLE = "CREATE_CIRCLE";

const createSquare = () => {
  return {
    type: CREATE_SQUARE
  };
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_SQUARE:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};
const Store = createStore(reducer);

export default Store;
