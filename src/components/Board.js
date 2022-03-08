import React from 'react';
import Tile from './Tile.js';

function Board() {
    const twenty_five_tiles = Array.from(Array(25).keys());

    return (
        <div className="tile-container">
            {twenty_five_tiles.map((tile, index) => <Tile key={index} tile={tile} />)}
        </div>
        
    )
}

export default Board;