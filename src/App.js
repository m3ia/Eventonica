import logo from './calendar.png';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [apiResponse, setAPIResponse] = useState('');

  function callAPI() {
    fetch('http://localhost:9000/events')
      .then((res) => res.text())
      .then((res) => setAPIResponse(res))
      .catch((err) => err);
  }

  useEffect(() => {
    callAPI();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          {' '}
        </h1>{' '}
      </header>{' '}
      <p className="App-intro"> {apiResponse} </p>
    </div>
  );
}

export default App;
