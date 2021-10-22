import React from 'react';
import cards from '../../data/cards'
import Card from '../../components/Card';

import './styles.css'

function Dashboard() {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <ul className="cardList">
      {
        cards.map(card => (
          <Card key={card.id}
          title={card.title}
          description={card.description}
          user={card.user}
          picture={card.user.picture}
          value={card.value}
          />
        ))
      }
      </ul>
      
    </div>
  )
}

export default Dashboard;