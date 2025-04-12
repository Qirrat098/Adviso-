import React from 'react';
import Header from './components/Header/Header';
import './styles/global.css';
import ClientShowcase from './components/ClientShowcase/ClientShowcase';
import Industries from './components/Industries/Industries';
import FlipCards from './components/FlipCards/FlipCards';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ClientShowcase />
      <Industries/>
      <FlipCards/>
    </div>
  );
};

export default App;