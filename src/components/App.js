import React, { useState, useEffect } from 'react';
// import logo from '../images/logo.svg';
import Header from './Header.js';
import Board from './Board.js';
import GameOver from './GameOver.js';

function App() {
  useEffect(() => {
    console.log('render')
  }, [])

  // let [isSelected, setIsSelected] = useState(Array(number_of_tiles).fill(false));
  // let [clickCount,setClickCount]= useState(1);
  // let [prevSelectedCard,setPrevSelectedCard]= useState(-1);
  // let [prevCardId,setPrevCardId]= useState(-1);

  // console.log(isClicked)

  // function isCardMatch(card1, card2, card1Id, card2Id) {
  //   if (card1 === card2) {
  //     const hideCard = this.state.shuffledCard.slice();
  //     hideCard[card1Id] = -1;
  //     hideCard[card2Id] = -1;
  //     setTimeout(() => {
  //       this.setState(prevState => ({
  //         shuffledCard: hideCard
  //       }))
  //     }, 1000);
  //   } else {
  //     const flipBack = this.state.isSelected.slice();
  //     flipBack[card1Id] = false;
  //     flipBack[card2Id] = false;
  //     setTimeout(() => {
  //       this.setState(prevState => ({ isSelected: flipBack }));
  //     }, 1000);
  //   }
  // };

  // function restartGame() {
  //   this.setState({
  //     isSelected: Array(16).fill(false),
  //     shuffledCard: App.duplicateCard().sort(() => Math.random() - 0.5),
  //     clickCount: 1,
  //     prevSelectedCard: -1,
  //     prevCardId: -1
  //   });
  // };

  // function isGameOver() {
  //   // return this.state.isSelected.every((element, index, array) => element !== false);
  //   return false
  // };

  return (
    <div>
      <Header />
      {/* <Header restartGame={restartGame} /> */}
      {/* { isGameOver() ? <GameOver restartGame={restartGame} /> : */}
      <Board />
    </div>
  );
}


export default App;
