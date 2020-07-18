import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img height="70px" width="100px" src="https://coneximagetesting.s3.amazonaws.com/AWS.png" className="App-logo" alt="logo" />
        <p>Image loaded from an AWS S3 bucket!</p>
      </header>
    </div>
  );
}

export default App;
