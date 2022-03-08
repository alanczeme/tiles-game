import React, { useState } from 'react';
// import logo from '../images/logo.svg';
import Header from './Header.js';
import Tile from './Tile.js';
import GameOver from './GameOver.js';

function App() {
  // Must have an even number of columns
  const number_of_columns = 6 
  const number_of_tiles = number_of_columns ** 2

  let colors = [];

  for (let i = 0; i < number_of_tiles/2; i++) {
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      const randomColorHex = "#" + randomColor;
      colors.push(randomColorHex);
      colors.push(randomColorHex);
  }

  function shuffle(array) {
      let currentIndex = array.length,  randomIndex;
      // While there remain elements to shuffle...
      while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      }
      return array;
    }

  colors = shuffle(colors);
  // console.log(colors)
  
  // return (
  //     <div className="tile-container">
  //         {colors.map((tile, index) => <Tile key={index} tile={tile} />)}
  //     </div>
  // )

  let [isSelected, setIsSelected] = useState(Array(number_of_tiles).fill(false));
  let [clickCount,setClickCount]= useState(1);
  let [prevSelectedCard,setPrevSelectedCard]= useState(-1);
  let [prevCardId,setPrevCardId]= useState(-1);

  console.log(isSelected)

  function handleClick(event) {
    event.preventDefault();
    const cardId = event.target.id;
    const newFlipps = this.state.isSelected.slice();
    this.setState({
        prevSelectedCard: this.state.shuffledCard[cardId],
        prevCardId: cardId
    });

    if (newFlipps[cardId] === false) {
      newFlipps[cardId] = !newFlipps[cardId];
      this.setState(prevState => ({ 
        isSelected: newFlipps,
        clickCount: this.state.clickCount + 1
      }));

      if (this.state.clickCount === 2) {
        this.setState({ clickCount: 1 });
        const prevCardId = this.state.prevCardId;
        const newCard = this.state.shuffledCard[cardId];
        const previousCard = this.state.prevSelectedCard;

        isCardMatch(previousCard, newCard, prevCardId, cardId);
      }
    }
  };

  function isCardMatch(card1, card2, card1Id, card2Id) {
    if (card1 === card2) {
      const hideCard = this.state.shuffledCard.slice();
      hideCard[card1Id] = -1;
      hideCard[card2Id] = -1;
      setTimeout(() => {
        this.setState(prevState => ({
          shuffledCard: hideCard
        }))
      }, 1000);
    } else {
      const flipBack = this.state.isSelected.slice();
      flipBack[card1Id] = false;
      flipBack[card2Id] = false;
      setTimeout(() => {
        this.setState(prevState => ({ isSelected: flipBack }));
      }, 1000);
    }
  };

  function restartGame() {
    this.setState({
      isSelected: Array(16).fill(false),
      shuffledCard: App.duplicateCard().sort(() => Math.random() - 0.5),
      clickCount: 1,
      prevSelectedCard: -1,
      prevCardId: -1
    });
  };

  function isGameOver() {
    // return this.state.isSelected.every((element, index, array) => element !== false);
    return false
  };

  return (
    <div>
      <Header restartGame={restartGame} />
      { isGameOver() ? <GameOver restartGame={restartGame} /> :
      <div className="tile-container">
        {colors.map((tile, index) => 
            <Tile 
              key={index} 
              tile={tile} 
              id={index} 
              // cardNumber={cardNumber} 
              isSelected={isSelected[index]} 
              handleClick={handleClick}     
            />
          )
        }

      </div>
      }
    </div>
  );
}


export default App;
