import React from 'react';

function Header({ restartGame }) {
    return ( 
        <div className="grid-header-container">
            <div className="justify-left timer"></div>
            <div className="justify-center game-status-text"></div>
            <div className="justify-end">
                <button onClick={restartGame} className="restart-button">Restart Game</button>
            </div>
        </div>
    )
}

export default Header;



