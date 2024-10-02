import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Body from './components/Body';
import Footer from './components/Footer';


const App = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [cards, setCards] = useState([]);

  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  useEffect(() => {
    fetch(`http://localhost:3000/api/cards?page=${pageNumber}`)
      .then((response) => response.json())
      .then(({ totalPages, cards }) => {
        setCards(cards);
        setNumberOfPages(totalPages);
      });
  }, [pageNumber]);

  

  useEffect(() => {
      axios.get('http://localhost:3000/api/cards')
          .then(response => {
            console.log(response.data)
            setCards(response.data.cards); // Update state with fetched card data
          })
          .catch(error => {
              console.error('Error fetching the card data:', error);
          });
      }, []); // Empty dependency array ensures this runs only once when component mounts


  return (
    <div className="App">
      
      <Footer cards={cards} pageNumber={pageNumber} setPageNumber={setPageNumber} numberOfPages={numberOfPages} pages={pages}  />
      <Body cards={cards} />
    </div>
  );
};

export default App;