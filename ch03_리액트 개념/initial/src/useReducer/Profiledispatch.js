import React from "react";
import { useReducer, createContext } from "react";
export default Profiledispatch.createContext(null);
const INITIAL_STATE = { name: "empty", age: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return {
        ...state,
        name: action.name,
      };
    case "setAge":
      return {
        ...state,
        age: action.age,
      };
    default:
      return state;
  }
}

function Profiledispatch() {
  const [state, dsipatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <div>
      <Profiledispatch.Provider value={dsipatch}>
        <SomeComponent />
      </Profiledispatch.Provider>
    </div>
  );
}
