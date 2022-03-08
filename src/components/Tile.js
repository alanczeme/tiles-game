import React, { useState } from 'react';

function Tile({tile, isSelected, handleClick}) {

    // let [ selectedTile, setSelectedTile ] = useState([])

    return (
        <button style={{background: `${tile}`}} className={`tile-button${tile.id !== -1 ? "" : " hide-tile"}`} onClick={handleClick}></button>
    )
}

export default Tile;