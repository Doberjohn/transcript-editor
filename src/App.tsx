import './App.css';
import React from 'react';
import {Div} from "./components/atoms";
import {Home} from "./pages/Home/Home";
import ReactGA from 'react-ga4';
const TRACKING_ID = "UA-201203669-2";
ReactGA.initialize(TRACKING_ID);

function App() {
   return (
      <Div>
         <Home/>
      </Div>
   );
}

export default App;
