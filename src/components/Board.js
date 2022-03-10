import React, { useState, useEffect } from 'react';
import Tile from './Tile.js';

function Board() {
    
    const [isClicked, setIsClicked] = useState(-1);
    const [colors, setColors] = useState([])
    const [selectedTileColor, setSelectedTileColor] = useState("no color")
    const [correctlyMatchedColors, setCorrectlyMatchedColors] = useState([])
    const [isRestart, setIsRestart] = useState(false)
    const [score, setScore] = useState(0)

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

    function restartGame() {
        console.log("restart")
        setIsRestart(true)
    }

    // Creates the tiles board
    useEffect(() => {
        let array = []
        // Must have an even number of columns
        const number_of_columns = 6 
        const number_of_tiles = number_of_columns ** 2
        for (let i = 0; i < number_of_tiles/2; i++) {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            const randomColorHex = "#" + randomColor.padStart(6, "0");
            array.push(randomColorHex);
            array.push(randomColorHex);
        }
        setColors(shuffle(array))
        setIsRestart(false)
    }, [isRestart])

    function isMatch(secondSelectedTileColor) {
        if (selectedTileColor === secondSelectedTileColor) {
            console.log("same same")
            setScore(score+1)
            setCorrectlyMatchedColors([...correctlyMatchedColors, selectedTileColor])
        }
        else {
            console.log("wrong")
            setCorrectlyMatchedColors([])
            setScore(0)
            setIsRestart(true)
        }
        
        setIsClicked(-1)
        setSelectedTileColor("no color");
    }
    
    function handleClick(event) {
        event.preventDefault();
        setIsClicked(event.target.id)
        setSelectedTileColor(event.target.value)
        if (selectedTileColor !== "no color") {
            isMatch(event.target.value) 
        }
    };

    console.log(correctlyMatchedColors)
    // console.log(is)


    return (
        <div class="parent-container">
            <div className="justify-end">
                <button onClick={restartGame} className="restart-button">Restart Game</button>
            </div>  
            <div className="tile-container">
                {colors.map((tile, index) => 
                        <Tile 
                            key={index} 
                            tile={tile} 
                            id={index}
                            isClicked={isClicked}
                            handleClick={handleClick}
                            correctlyMatchedColors={correctlyMatchedColors}
                        />
                    )
                }
            </div>
            <div class="player-score">
                <h2 class="score">Score: {score}</h2>
                <button>Save Score</button>
            </div>
        </div>
    )
}

export default Board;