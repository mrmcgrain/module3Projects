// import logo from './logo.svg';
import './App.css';
import React, {createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { ReDirect } from "react-router"
import Nav from "./views/Nav"
// import {Link} from "react-router-dom"
import CalcDashBoard from "./projects/calculator/components/CalcDashBoard"

// import CalcDashBoardCopy from "./projects/calculator/components/CalcDashBoardcopy"

// import CSS from "./projects/calculator/style/calc.css"
import PokeStuff from './projects/pokestuff/comps/PokeStuff';
import PokeFront from "./projects/pokestuffFrontEnd/comps/PokeStuff"
import DrumMachine from "./projects/drumMachine/components/DrumMachine"
import ProductList from "./projects/Productlist/views/ProductList"
import QuoteGenerator from "./projects/quote/comps/QuoteDashBoard"
import QuoteDashBoard from './projects/quote/comps/QuoteDashBoard';
import PomodoroDash from './projects/pomodoroClock/comps/PomodoroDash'
import Markup from "./projects/markup/component/Markup"
// import CalcDashBoardOLD from "./projects/calculator/CalcDashBoardOLD"





function App() {

  // const { display, setDisplay } = useState({})

  // const handleClick = (e) => {
  //   e.preventDefault()
  //   console.log("handleClick")
  //   setDisplay(prev => ({
  //     ...prev,
  //     display: e.target.attributes.name.value
  //   }))
  // }


  return (
    <div className="App">


  <Nav />
  
      <Routes>
        {/* <Route exact path="/" element={<Nav />} /> */}

        <Route exact path="/home" element={<Nav />} />

        <Route path="/Drum" element={<DrumMachine />} />
        <Route path="/Poke" element={<PokeStuff />} />
        <Route path="/PokeFront" element={<PokeFront />} />

        <Route path="/CalcDashBoard" element={<CalcDashBoard />} />
        {/* <Route path="/CalcDashBoardCopy" element={<CalcDashBoardCopy />} /> */}

        <Route path="/ProductList" element={<ProductList />} />

        <Route path="/QuoteDashBoard" element={<QuoteDashBoard />} />
        <Route path="/PomodoroDash" element={<PomodoroDash />} />
        <Route path="/Markup" element={<Markup /> } />


      </Routes>


</div>

  );
}

export default App;
