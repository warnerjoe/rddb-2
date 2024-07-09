// import React, { useState, useEffect } from 'react';
// import axios from 'axios';  
// import CardCount from './Footer/CardCount.js';
// import Pagination from './Footer/Pagination.js';

// const Footer = ({ cards, setPageNumber, pageNumber, numberOfPages }) => {
//   const firstCard = pageNumber * 12 + 1;
//   const lastCard = Math.min((pageNumber + 1) * 12, cards.length * numberOfPages); 
//   const [cardCount, setCardCount] = useState(null);

//   useEffect(() => {
//     const fetchCardCount = async () => {
//       try {
//         const response = await axios.get('/api/cards/count'); // Adjust URL as per your backend setup
//         setCardCount(response.data.totalCards);
//       } catch (error) {
//         console.error('Error fetching card count:', error);
//       }
//     };

//     fetchCardCount();
//   }, []);

//   const gotoPrevious = () => {
//     setPageNumber(Math.max(0, pageNumber - 1));
//   };

//   const gotoNext = () => {
//     setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
//   };

//   const onPageChange = (pageIndex) => {
//     setPageNumber(pageIndex);
//   };

//   return (
//     <div>   
//       {/* Render Pagination */}
//       <Pagination
//         currentPage={pageNumber}
//         totalPages={numberOfPages}
//         onPageChange={onPageChange}
//         gotoPrevious={gotoPrevious}
//         gotoNext={gotoNext}
//       />

//       {/* Desktop Layout */}
//       <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
//         <CardCount firstCard={firstCard} lastCard={lastCard} cardCount={cardCount} />   
//       </div>
//     </div>
//   );
// };

// export default Footer;



import React, {useState, useEffect} from 'react';
import axios from 'axios';  
import CardCount from './Footer/CardCount.js';
import Pagination from './Footer/Pagination.js';

const Footer = ({ cards, setPageNumber, pageNumber, numberOfPages }) => {
  let firstCard = pageNumber * 12 + 1;
  let lastCard = Math.min((pageNumber + 1) * 12, cards.length * numberOfPages); 
  const [cardCount, setCardCount] = useState(null);

  useEffect(() => {
    const fetchCardCount = async () => {
      try {
        const response = await axios.get('/api/cards/count'); 
        setCardCount(response.data.totalCards);
      } catch (error) {
        console.error('Error fetching card count:', error);
      }
    };

    fetchCardCount();
  }, []);
  
  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
    console.log(pageNumber);
  };

  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };

  const onPageChange = (pageIndex) => {
    setPageNumber(pageIndex);
  };

  return (
    <div>   
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <CardCount firstCard={firstCard} lastCard={lastCard} cardCount={cardCount} />   
      </div>

      < Pagination 
        currentPage={pageNumber} 
        totalPages={numberOfPages} 
        onPageChange={onPageChange} 
        gotoPrevious={gotoPrevious} 
        gotoNext={gotoNext} 
      />

    </div>
  );
};

export default Footer;
