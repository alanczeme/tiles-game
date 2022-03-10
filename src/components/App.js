import React, { useState, useEffect } from 'react';
// import logo from '../images/logo.svg';
import Header from './Header.js';
import Board from './Board.js';
import GameOver from './GameOver.js';

function App() {
  const [scores, setScores] = useState([])
  const [player, setPlayer] = useState([])

  useEffect(() => {
    async function fetchData() {
      let request = await fetch("http://localhost:9292/scores")
      let response = await request.json()
      setScores(response)
      console.log(scores)

      request = await fetch("http://localhost:9292/player")
      response = await request.json()
      setPlayer(response)
      console.log(player)
    }
    fetchData()
  }, [])

  return (
    <div>
      <Header />
      <Board />
    </div>
  );
}


export default App;
