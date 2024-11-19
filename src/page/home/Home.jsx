import React, {useState} from 'react'
import SuspenseEx from '../../component/suspense/SuspenseEx'

const Home = () => {
    const [count, setCount] = useState(0)
    const counter = () => {
        setCount(count + 1)
    }
  return (
      <div className='h1 text-danger w-100 text-center'>
          
          <p className='h2'>{count}</p>
          
          <button onClick={counter} className='bg-success btn h3'>Increment</button>

          <SuspenseEx/>
        </div>
  )
}

export default Home