import React from 'react';
import './App.css';
import Lottie from 'react-lottie';
import animationData from './lotties/4801-weather-partly-shower.json';

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Forecast Weather</h2>
        <Lottie options={defaultOptions} height={400} width={400} />
      </header>
    </div>
  );
}

export default App;
