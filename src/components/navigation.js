import React from 'react';

function Navigation(){

    return <nav>
            <p>LISAN<span id='blink'>_</span></p>
            <ul>
                <li className='list_bar'>
                    <a href="veoveneht.eu.org">HOME</a>
                </li>
                <li className='list_bar'>
                    <a href="#contact">CONTACT</a>
                </li>
                <li className='list_bar'>
                    <a href alt="Lisan Shidqi Farizan" download>CV</a>
                </li>
            </ul>
        </nav>
}

export default Navigation;