import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Simple Weather </h1>
      </header>
      <main>
<Forecast></Forecast>
      </main>
      <footer>
        Simple Weather 2020 
      </footer>
    </div>
  );
}

export default App;
