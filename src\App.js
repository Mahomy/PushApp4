import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import Clock from './components/Clock';
import FeatureList from './components/FeatureList';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="App">
      <Header 
        title="🚀 React Test App" 
        subtitle="Successfully pushed to GitHub via Python!" 
      />
      
      <Clock time={currentTime} />
      
      <Counter 
        value={count}
        onIncrement={increment}
        onDecrement={decrement}
        onReset={reset}
      />

      <FeatureList />

      <div className="info-section">
        <p>This React app was pushed to GitHub using the GitHub File Pusher!</p>
        <p>Check the console for additional logs.</p>
        <p>All components are working correctly! 🎉</p>
      </div>

      <Footer />
    </div>
  );
}

export default App;
