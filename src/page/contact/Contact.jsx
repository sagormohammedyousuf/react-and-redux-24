import React,{useCallback, useReducer} from 'react'
import Counter from '../../component/reducer/counter';
import reducer from "../../component/reducer/Reducer";
const Contact = () => {
 
  const callInitalState = { count: 0 };

  const [state, dispatch] = useReducer(reducer, callInitalState);

  const countUp = () => {
    dispatch({
      type: "increment"
    })
  }

  const countDecrement = () => {
    dispatch({
      type: "decrement",
    })
  }

  const countReset = useCallback(() => {
    dispatch({
      type: "reset"
    })
  })


  return (
    <div className="h1 text-danger text-center w-100">
      <Counter />
      <small>its from use reducer</small>


      <h2 className='mt-5'> count {state.count}</h2>
      <div className="mt-5 d-flex gap-3 justify-content-center">
        <button onClick={countUp} className="btn bg-warning">call - increment</button>
        <button onClick={countDecrement} className="btn bg-warning">call - dicrement</button>
        <button onClick={countReset} className="btn bg-warning">call - reset</button>
      </div>

      <h3>it's form use call back and useReducer mix</h3>
    </div>
  );
}

export default Contact