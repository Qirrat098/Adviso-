// components/FlipCards/FlipCards.jsx
import React from 'react';
import styles from './FlipCards.module.css';

const FlipCards = () => {
  const cards = [
    { 
      title: 'Small Business', 
      text: 'Stay more out of mind on strategies', 
      icon: '💼',
      image: '/images/pic1.png'
    },
    { 
      title: 'Started', 
      text: 'Helping you grow fast', 
      icon: '🚀',
      image: '/images/Pic2.png'
    },
    { 
      title: 'FinTech', 
      text: 'Financial help at web companies', 
      icon: '📈',
      image: '/images/Pic3.png'
    },
    { 
      title: 'Big corporation', 
      text: 'Solutions for large businesses', 
      icon: '🏢',
      image: '/images/Pic4.png'
    },
    { 
      title: 'LLCs', 
      text: 'Easy accounting for your LLCs', 
      icon: '📊',
      image: '/images/Pic5.png'
    },
    { 
      title: 'Commerce', 
      text: 'Smooth finances', 
      icon: '💰',
      image: '/images/Pic6.png'
    }
  ];

  return (
    <div className={styles.cardsContainer}>
      {cards.map((card, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.cardFront}>
              <img 
                src={card.image}
                alt={card.title}
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardBack}>
              <div className={styles.cardContent}>
                <div className={styles.icon}>{card.icon}</div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>{card.text}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipCards;