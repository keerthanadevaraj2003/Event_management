import { createStore } from "redux";

const initialState = {
  user:{username:"Visitor ", password:""}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;