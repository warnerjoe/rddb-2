import React from 'react';

const SuperstarCard = ({ card, getBackgroundColor }) => {
  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg p-4 ${getBackgroundColor()}`}>
      {/* Card Name */}
      <div className="font-bold text-xl mb-2">
        {card.name}
      </div>

      {/* Card Type */}
      <p className="text-gray-700 text-base">
        Superstar Card
      </p>

      {/* Superstar Value */}
      <p className="text-gray-700 text-base mt-2">
        Superstar Value: {card.superstarValue}
      </p>

      {/* Starting Hand Size */}
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Starting Hand Size: {card.startingHandSize}</span>
      </div>

      {/* Card Image */}
      <img className="w-full" src="https://media.bleacherreport.com/image/upload/w_800,h_533,c_fill/v1696219301/udsc6iawctp8ygwfvebn.jpg" alt={"Picture for the " + card.name.toString() + "card."} />
      
      <div className="px-6 py-4">
        {/* Card Text */}
        <p className="text-gray-700 text-base mt-2">
          {card.cardText}
        </p>

        {/* Flavor Text */}
        <p className="text-gray-700 text-base mt-2">
          <i>{card.flavorText}</i>
        </p>
      </div>      
    </div>
  );
};

export default SuperstarCard;
