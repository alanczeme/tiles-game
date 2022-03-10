import React, { useState, useEffect } from 'react';
import Tile from './Tile.js';

function Board() {
    
    const [isClicked, setIsClicked] = useState(-1);
    const [colors, setColors] = useState([])

    useEffect(() => {
        let array = []
        // Must have an even number of columns
        const number_of_columns = 6 
        const number_of_tiles = number_of_columns ** 2
        for (let i = 0; i < number_of_tiles/2; i++) {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            const randomColorHex = "#" + randomColor;
            array.push(randomColorHex);
            array.push(randomColorHex);
        }
        setColors(shuffle(array))
    }, [])

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
    
    function handleClick(event) {
        event.preventDefault();
        setIsClicked(event.target.id)
    };

    return (
        <div class="parent-container">
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
            <div class="player-score">
                <h1>Player: </h1>
                <h1> Nathalia</h1>
                <h2 class="score">Score: </h2>
                <h2> 10000 </h2>
            </div>
        </div>
    )
}

export default Board;