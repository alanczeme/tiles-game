import React, { useEffect } from 'react';

function Tile({id, tile, isClicked, handleClick, correctlyMatchedColors}) {

    // console.log(id, isClicked)
    // console.log(tile)

    // useEffect(() => {
    // },[])

    return (
        <button
            id={id}
            value={tile}
            disabled={isClicked == id || correctlyMatchedColors.includes(tile) ? true : false}
            style={{background: `${tile}`}}
            className={`tile-button ${isClicked == id ? "selected" : ""} ${tile.id !== -1 ? "" : "hide-tile"} ${correctlyMatchedColors.includes(tile) ? "hide-tile" : ""}`} 
            onClick={handleClick}>
        </button>
    )
}

export default Tile;