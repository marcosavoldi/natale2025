import React, { useEffect, useState } from 'react';
import './FallingEmojis.css';

const EMOJIS = ['❄️', '🎁', '🎅', '🎄', '✨'];

const FallingEmojis = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Generate initial set of falling items
    const initialItems = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      left: Math.random() * 100 + '%',
      animationDuration: Math.random() * 3 + 2 + 's',
      animationDelay: Math.random() * 5 + 's',
      fontSize: Math.random() * 20 + 20 + 'px',
    }));
    setItems(initialItems);
  }, []);

  return (
    <div className="falling-emojis-container">
      {items.map((item) => (
        <div
          key={item.id}
          className="falling-emoji"
          style={{
            left: item.left,
            animationDuration: item.animationDuration,
            animationDelay: item.animationDelay,
            fontSize: item.fontSize,
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
};

export default FallingEmojis;
