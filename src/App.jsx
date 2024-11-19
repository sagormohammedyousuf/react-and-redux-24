import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./component/navbar/Menu";


import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Home from './page/home/Home';
import Blog from './page/blog/Blog';
import About from './page/about/About';
import Contact from './page/contact/Contact';
import Farway from './fare-way/Farway';
import CounterPage from './page/counterPage/CounterPage';
// import TraveLList from './project/travellist/TravelList';

// const message = [
//   "learn react *",
//   "apply for Jobs",
//   "inves your new income"
// ]


// const name = [
//   " Sagor",
//   "yousuf",
//   "mohammed"
// ]

function App() {

  // const [step, setStep] = useState(1)
  // // const [test, setTest] = useState(1)

  // const [isOpen, setIsOpen] = useState(true);


  // const prev = () => {
  //   if (step > 1) {
  //     // setStep(step - 1);
  //     setStep((s) => s - 1);
  //   }
  // }

  // const next = () => {
  //   if (step < 3) {
  //     // setStep(step + 1);
  //     setStep((s) => s + 1);
      

  //     // setTest({})
  //   }
  // }

  return (
    <div className="app">
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />

        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="farway" element={<Farway />} />
        <Route path="counterpage" element={<CounterPage />} />
      </Routes>

      {/* <button onClick={()=>setIsOpen(!isOpen)} className='close'>&times; </button>
      { isOpen && (
        <div className="app">
          <div className="steps">
            <div className="number d-flex">
              <div className={`${step >= 1 ? "active" : ""}`}>1</div>
              <div className={`${step >= 2 ? "active" : ""}`}>2</div>
              <div className={`${step >= 3 ? "active" : ""}`}>3</div>
            </div>

            <p className="message">
              step {step}: {message[step - 1]}
              {name[step - 1]}
            </p>
            <div className="buttons">
              <button className="prev" onClick={prev}>
                Prev
              </button>
              <button onClick={next}>next</button>
            </div>
          </div>
        </div>
      )} */}

      {/* <TraveLList/> */}

      {/* <Farway/> */}
    </div>
  );
}

export default App
