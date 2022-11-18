import './App.css';
import {Div} from "./components/atoms";
import {Home as Homepage} from "./pages";
import Parse from 'parse';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = 'CrGXeDwyK55fJUehf50tnQwOPVUZMqV5WHIgKxhS';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'O5Ttvz0UJPz0u03aY8kTWldkaoL6E8M5tret4OLi';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
   return (
      <Div>
         <Homepage/>
      </Div>
   );
}

export default App;
