import React, { useState } from 'react';
import FallingEmojis from './FallingEmojis';
import InitialScreen from './InitialScreen';
import PrankScreen from './PrankScreen';
import RevealScreen from './RevealScreen';
import './index.css';

function App() {
  const [appState, setAppState] = useState('INITIAL'); // INITIAL, PRANK, REVEAL

  const startPrank = () => setAppState('PRANK');
  const showReveal = () => setAppState('REVEAL');

  return (
    <div className="App relative min-h-screen text-white overflow-hidden font-sans">
      {/* Background Animation */}
      <FallingEmojis />

      {/* Screens */}
      {appState === 'INITIAL' && (
        <InitialScreen onOpen={startPrank} />
      )}

      {appState === 'PRANK' && (
        <PrankScreen onFinishPrank={showReveal} />
      )}

      {appState === 'REVEAL' && (
        <RevealScreen />
      )}
    </div>
  );
}

export default App;
