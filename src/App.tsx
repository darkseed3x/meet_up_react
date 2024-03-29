import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './components/timer/timer'
import './components/fonts/fonts.css'
import './components/base.css'


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Timer />
      </header> 
     
    </div>
  );
}

export default App;
