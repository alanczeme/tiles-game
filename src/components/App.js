import React, { useState, useEffect } from 'react';
// import logo from '../images/logo.svg';
import Header from './Header.js';
import Board from './Board.js';
import GameOver from './GameOver.js';



function App() {
  const [player, setPlayer] = useState([])

  return (
    <div>
      <Header />
      <Board />
    </div>
  );
}


export default App;
