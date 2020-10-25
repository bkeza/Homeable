import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import UserInput from './components/UserInput.js';
import Results from './components/Results.js';
// import { displayColNames } from "./components/Constants.js";
// import { List } from "list.js"; //not sure why this didn't work all of a sudden
import './styles.css';

// var tbl;
function App() {
  console.log();
  const [results, setResults] = useState([]);
  // console.log({ valueNames: displayColNames });
  // useEffect(() => {
  //   tbl = List("results", { valueNames: displayColNames });
  // }, []);

  //added nav feature to test
  //<h1>Homeable</h1>
  //<h2>Your resource for secure living</h2>
  //<nav>
  //      <ul>
  //        <li>Search</li>
  //        <li>About</li>
  //        <li>Additional Resources</li>
  //      </ul>
  //    </nav>
  return (
    <div className="App">
      <UserInput setResults={setResults} />
      <Results results={results} />
      <span style={{ float: 'center' }}>Total Items: {results.length}</span>
      <br />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
