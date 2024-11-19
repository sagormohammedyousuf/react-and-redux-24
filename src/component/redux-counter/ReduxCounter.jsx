import {useSelector , useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/state/counter/counterSlice';


const ReduxCounter = () => {
    const count = useSelector((state) => 
        state.counter.value
    )

    const dispatch = useDispatch();

  return (
    <div className="card mt-5">
      <div className="card-header p-4  bg-secondary">
        <h4 className='h3 text-center text-white'>My counter app</h4>
      </div>
      <div className="card-body">
              <h1 className='h2 text-center text-info'>{count}</h1>
              <div className="my-4 w-100 d-flex align-items-center justify-content-center gap-4">
                 <button onClick={() => dispatch(increment())} className="btn bg-success text-white">
                        Increment
                    </button>
                    <button onClick={() => dispatch(decrement())} className="btn bg-warning text-black-50">
                        Decrement
                    </button>
              </div>
      </div>
    </div>
  );
}

export default ReduxCounter