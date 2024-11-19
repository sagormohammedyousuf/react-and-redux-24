import React, { useReducer } from "react";
import reducer from "./Reducer";

const Counter = () => {
  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>count: {state.count}</h1>

          <button
              className="btn bg-info"
        onClick={() => {
          dispatch({
            type: "increment",
          });
        }}>
        increment
      </button>

          <button
              className="bg-info btn"
        onClick={() => {
          dispatch({
            type: "decrement",
          });
        }}>
        dicrement
      </button>

          <button
              className="btn bg-danger"
        onClick={() => {
          dispatch({
            type: "reset",
          });
        }}>
        reset
      </button>

    
    </div>
  );
};

export default Counter;
