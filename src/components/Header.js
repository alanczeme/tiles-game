import React from 'react';
import logo from '../images/logo.png' 

function Header() {
    return ( 
        <div className="grid-header-container">
            <div className="justify-left timer"></div>
            <div className="justify-center game-status-text"></div>

            <div id="logo">
                <img className="logo" 
                width="100px" 
                height="100px"  
                position="absolute"
                src={logo} 
                atl="logo"/>
                
            </div>
        </div>
    )
}

export default Header;



