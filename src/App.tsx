import './App.css';
import React from 'react';
import {Div} from "./components/atoms";
import {HomePage} from "./pages";
import ReactGA from 'react-ga4';

ReactGA.initialize("G-28MLPHX55W");

function App() {
   return (
      <Div>
         <HomePage/>
      </Div>
   );
}

export default App;
