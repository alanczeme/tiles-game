import React, { useState } from 'react';

function Tile({id, tile, isClicked, handleClick}) {

    // console.log(id, isClicked)

    return (
        <button
            id={id}
            value={tile}
            disabled={isClicked == id ? true : false}
            style={{background: `${tile}`}}
            className={`tile-button ${isClicked == id ? "selected" : ""} ${tile.id !== -1 ? "" : "hide-tile"}`} 
            onClick={handleClick}>
        </button>
    )
}

export default Tile;