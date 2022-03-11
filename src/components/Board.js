import React, { useState, useEffect } from 'react';
import Tile from './Tile.js';

function Board() {
    
    const [isClicked, setIsClicked] = useState(-1);
    const [colors, setColors] = useState([])
    const [selectedTileColor, setSelectedTileColor] = useState("no color")
    const [correctlyMatchedColors, setCorrectlyMatchedColors] = useState([])
    const [isRestart, setIsRestart] = useState(false)
    const [score, setScore] = useState(0)
    const [inputName, setInputName] = useState("")
    const [scores, setScores] = useState([])

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
            // console.log("same same")
            setScore(score+1)
            setCorrectlyMatchedColors([...correctlyMatchedColors, selectedTileColor])
        }
        else {
            // console.log("wrong")
            saveAndRestart();
        }
        
        setIsClicked(-1)
        setSelectedTileColor("no color");
    }

    function saveAndRestart() {
        setCorrectlyMatchedColors([])
        restartGame()
        // setScore(0)
        // setIsRestart(true)
    }
    
    function restartGame() {
        // console.log("restart")
        setIsRestart(true)
        // setCorrectlyMatchedColors([])
        setScore(0)
    }

    function handleClick(event) {
        event.preventDefault();
        setIsClicked(event.target.id)
        setSelectedTileColor(event.target.value)
        if (selectedTileColor !== "no color") {
            isMatch(event.target.value) 
        }
    };

    
    const scores_table_rows = scores.map((score, index) => {
        return (
        <tr>
            <td>{index + 1}</td>
            <td>{score.player_name}</td>
            <td>{score.score}</td>
        </tr>
        )
    })

    useEffect(() => {
        async function fetchData() {
          let request_scores = await fetch("http://localhost:9292/scores/top")
          let response_scores = await request_scores.json()
          setScores(response_scores)
          // console.log(response_scores)
          
          // request = await fetch("http://localhost:9292/player")
          // response = await request.json()
          // setPlayer(response)
          // console.log(response)
        }
        fetchData()
    }, [])


    function saveScore(event) {
        event.preventDefault();
        fetch("http://localhost:9292/scores",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            score: score,
            player_id: 127
          })
        })
        .then(resp => resp.json()) 
        .then(data =>{
            console.log(data)
        })
    }

    return (
        <div className="parent-container">
            <div>
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
                <div className="player-score">
                    <h2 className="score">Score: {score}</h2>
                    Enter Name: 
                    <div>
                        <form onSubmit={saveScore}>
                            <input type="text" className="" value={inputName} onChange={(event) => {setInputName(event.target.value)}}></input>
                            <div className="button">
                                <input type="submit" className="" value="Save Score"></input>
                            </div>
                        </form>
                    </div>
                    <div className="button">
                        <button onClick={restartGame} className="restart-button">Restart Game</button>
                    </div>  
                </div>
            </div>
            <div className="table">
                <h3>Top Scores</h3>
                <table id="scores-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Player Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scores_table_rows}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Board;