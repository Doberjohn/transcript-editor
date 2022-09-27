import './App.css';
import React from 'react';
import {Div} from "./components/atoms";
import {Home} from "./pages/Home/Home";
import ReactGA from 'react-ga4';

ReactGA.initialize("G-28MLPHX55W");

function App() {
   return (
      <Div>
         <Home/>
      </Div>
   );
}

export default App;
