import React from 'react';


const CardCount = ({ firstCard, lastCard, cardCount}) => {

  

    return (
        <div>
          <p className="text-sm text-gray-700">
            Showing 
            <span className="font-medium"> {firstCard} </span> 
            to 
            <span className="font-medium"> {lastCard} </span> 
            of 
            <span className="font-medium"> {cardCount} </span> 
            results 
          </p>
        </div>
    );
};

export default CardCount;