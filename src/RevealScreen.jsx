import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const RevealScreen = () => {
  useEffect(() => {
    // Trigger confetti on mount
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#D42426', '#165B33', '#F8B229', '#ffffff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#D42426', '#165B33', '#F8B229', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  const passengers = [
    "Marco Savoldi",
    "Stefania Podestà",
    "Michele Damiani",
    "Jessica Piva"
  ];

  return (
    <div className="full-screen z-40" style={{ overflowY: 'auto', alignItems: 'flex-start', paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div className="glass-panel reveal-container animate-fade-in">
        <h1 className="reveal-title font-bold text-shadow-gold">
          Si vola in Colombia!! 🇨🇴
        </h1>

        <div className="info-box hover-scale">
          <h3 className="info-title">Passeggeri 🛂</h3>
          <ul className="passenger-list">
            {passengers.map((p, i) => (
              <li key={i} className="passenger-item">
                <span className="passenger-emoji">✈️</span>
                <span className="passenger-name">{p}</span>
                <div className="passenger-icons">
                  <span title="Mappamondo">🌍</span>
                  <span title="Zaino">🎒</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="info-box hover-scale">
          <h3 className="info-title">Dettagli Viaggio 📅</h3>
          <p style={{ marginBottom: '1rem', fontSize: '1.2rem' }}><strong>Periodo:</strong> Novembre 2026</p>
          
          <div className="flight-card-container">
            {/* Outbound */}
            <div className="flight-card">
              <div className="flight-header">
                <span className="flight-icon">🛫</span> Andata
              </div>
              <div className="flight-body">
                <div className="flight-route">
                  <span>Milano MXP</span>
                  <span className="arrow">➔</span>
                  <span>Bogotà BOG</span>
                </div>
                <div className="flight-details-text">
                  <p>Data: <strong>1 Nov 2026</strong></p>
                  <p>Orario: <strong>10:50</strong></p>
                  <p>Volo: <strong>Vedi PDF 📄</strong></p>
                </div>
              </div>
            </div>

            {/* Return */}
            <div className="flight-card">
              <div className="flight-header">
                <span className="flight-icon">🛬</span> Ritorno
              </div>
              <div className="flight-body">
                <div className="flight-route">
                  <span>Bogotà BOG</span>
                  <span className="arrow">➔</span>
                  <span>Milano MXP</span>
                </div>
                <div className="flight-details-text">
                  <p>Data: <strong>15 Nov 2026</strong></p>
                  <p>Orario: <strong>21:35</strong></p>
                  <p>Volo: <strong>Vedi PDF 📄</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a 
            href="/prenotazione.pdf" 
            download="Regalo_Viaggio_Colombia.pdf"
            className="btn-christmas party-btn"
            onMouseEnter={() => confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } })}
          >
            Scarica il tuo regalo 📥
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevealScreen;
