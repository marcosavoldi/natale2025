import React from 'react';

const InitialScreen = ({ onOpen }) => {
  return (
    <div className="full-screen z-20">
      <div className="glass-panel flex-center">
        <h1 className="title-main">
          Buon Natale 2025!
        </h1>
        
        <div className="gift-img-container floating">
          <img 
            src={`${import.meta.env.BASE_URL}regalo.png`} 
            alt="Regalo di Natale" 
            className="gift-img"
          />
        </div>

        <button 
          onClick={onOpen}
          className="btn-christmas"
        >
          Clicca qui per aprire il tuo regalo
        </button>
      </div>
    </div>
  );
};

export default InitialScreen;
