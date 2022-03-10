import React, { useState, useEffect } from 'react';
// import logo from '../images/logo.svg';
import Header from './Header.js';
import Board from './Board.js';
import GameOver from './GameOver.js';

function App() {
  useEffect(() => {
    console.log('render')
  }, [])

  return (
    <div>
      <Header />
      <Board />
    </div>
  );
}


export default App;
