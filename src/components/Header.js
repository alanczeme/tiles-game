import React from 'react';
import logo from '../images/logo.png' 

function Header({ restartGame }) {
    return ( 
        <div className="grid-header-container">
            <div className="justify-left timer"></div>
            <div className="justify-center game-status-text"></div>
            <div className="justify-end">
                <button onClick={restartGame} className="restart-button">Restart Game</button>
            </div>
            <div>
                <img className="logo" 
                width="100px" 
                height="100px"  
                alignItems= "center"
                src={logo} 
                atl="logo"/>
            </div>
        </div>
    )
}

export default Header;



