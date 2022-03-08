import React, { useState, useEffect } from 'react';
import Tile from './Tile.js';

function Board() {
    
    let [isClicked, setIsClicked] = useState(-1);
  
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
    
    function handleClick(event) {
        event.preventDefault();
        setIsClicked(event.target.id)

        // const cardId = event.target.id;
        // const newFlipps = this.state.isSelected.slice();
        // this.setState({
        //     prevSelectedCard: this.state.shuffledCard[cardId],
        //     prevCardId: cardId
        // });

        // if (newFlipps[cardId] === false) {
        //   newFlipps[cardId] = !newFlipps[cardId];
        //   this.setState(prevState => ({ 
        //     isSelected: newFlipps,
        //     clickCount: this.state.clickCount + 1
        //   }));

        //   if (this.state.clickCount === 2) {
        //     this.setState({ clickCount: 1 });
        //     const prevCardId = this.state.prevCardId;
        //     const newCard = this.state.shuffledCard[cardId];
        //     const previousCard = this.state.prevSelectedCard;

        //     isCardMatch(previousCard, newCard, prevCardId, cardId);
        //   }
        // }
    };

    return (
        <div className="tile-container">
            {colors.map((tile, index) => 
                    <Tile 
                        key={index} 
                        tile={tile} 
                        id={index}
                        isClicked={isClicked}
                        handleClick={handleClick}
                    />
                )
            }
        </div>
    )
}

export default Board;