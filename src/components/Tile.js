import React, { useState } from 'react';

function Tile({tile}) {

    // let [ selectedTile, setSelectedTile ] = useState([])

    return (
        <button style={{background: `${tile}`}} className="tile-button"></button>
    )
}

export default Tile;