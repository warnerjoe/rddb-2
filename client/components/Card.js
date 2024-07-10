import React from 'react';
import SuperstarCard from './SuperstarCard';
import ArsenalCard from './ArsenalCard';

const Card = ({ card }) => {

  // Function to get background color based on cardType
  const getBackgroundColor = () => {
    if (card.cardType.length === 2) {
      // Use gradient for cards with two types
      const firstType = card.cardType[0];
      const secondType = card.cardType[1];

      // Maneuver + Reversal
      if ((firstType === 'Maneuver' && secondType === 'Reversal') || (firstType === 'Reversal' && secondType === 'Maneuver')) {
        return 'bg-gradient-to-r from-yellow-200 to-red-200'; 
      // Maneuver + Action
      } else if ((firstType === 'Maneuver' && secondType === 'Action') || (firstType === 'Action' && secondType === 'Maneuver')) {
        return 'bg-gradient-to-r from-yellow-200 to-blue-200'; 
      // Reversal + Action
      } else if ((firstType === 'Reversal' && secondType === 'Action') || (firstType === 'Action' && secondType === 'Reversal')) {
        return 'bg-gradient-to-r from-blue-200 to-red-200'; 
      } else {
        // Default gradient for unknown combinations
        return 'bg-gradient-to-r from-gray-200 to-gray-400';
      }
    } else {
      // Use solid color for cards with one type
      const cardType = card.cardType[0];

      switch (cardType) {
        case 'Maneuver':
          return 'bg-yellow-200';
        case 'Reversal':
          return 'bg-red-200';
        case 'Action':
          return 'bg-blue-200';
        case 'Superstar':
          return 'bg-green-200';
        default:
          return 'bg-gray-200'; // Default color if no specific type matches
      }
    }
  }
  // Determine which component to render based on cardType
  const renderCardComponent = () => {
    if (card.cardType.includes('Superstar')) {
      return <SuperstarCard card={card} getBackgroundColor={getBackgroundColor} />;
    } else {
      return <ArsenalCard card={card} getBackgroundColor={getBackgroundColor} />;
    }
  }

  return (
    <div className="card-wrapper">
      {renderCardComponent()}
    </div>
  );
};

export default Card;
