import React from 'react';
import Card from './Card';

const Body = ({ cards } ) => {
    console.log(cards);

    return (
        
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Map over cards state and render a Card component for each card */}
                {cards.map(card => (
                    <Card key={card._id} card={card} />
                ))}
            </div>
        </div>
    );
};

export default Body;