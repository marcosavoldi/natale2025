import React, { useEffect, useState } from 'react';

const PrankScreen = ({ onFinishPrank }) => {
  const [step, setStep] = useState(0); // 0: Loading, 1: STOCAZZO, 2: Scherzavo

  useEffect(() => {
    const timers = [];
    timers.push(setTimeout(() => setStep(1), 3000));
    timers.push(setTimeout(() => setStep(2), 7000));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="full-screen z-30">
        
      {step === 0 && (
        <div className="glass-panel text-center">
          <h2 className="prank-text animate-pulse">
            Quest'anno per natale hai ricevuto....
          </h2>
          <div style={{ fontSize: '3rem', marginTop: '1rem' }}>🎁</div>
        </div>
      )}

      {step === 1 && (
        <div className="animate-bounce">
          <h1 className="prank-big-text">
            STOCAZZO!!
          </h1>
        </div>
      )}

      {step === 2 && (
        <div className="glass-panel text-center animate-fade-in">
          <h2 className="title-main" style={{ fontSize: '2rem' }}>Scherzavo... 😅</h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>C'è un regalo vero per te!</p>
          <button 
            onClick={onFinishPrank}
            className="btn-christmas green"
          >
            Clicca qui per aprire il regalo vero
          </button>
        </div>
      )}
    </div>
  );
};

export default PrankScreen;
