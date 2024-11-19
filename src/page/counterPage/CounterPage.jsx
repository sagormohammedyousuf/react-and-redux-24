import React from 'react'
import ReduxCounter from '../../component/redux-counter/ReduxCounter';


const CounterPage = () => {
    console.log('it')
  return (
    <div className="container  h-100 mt-5 pt-5">
          <div className="row justify-content-center">
              <div className="col-lg-6">
                 
                 <ReduxCounter/>
              </div>
      </div>
    </div>
  );
}

export default CounterPage