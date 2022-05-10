import React from 'react'
import chomik from '../img/chomik.gif'
function Navbar() {
    return (
        <div className='top'> 
            <div className='topLeft'>
                <img src={chomik} />
                    <p>TechBox</p>
                </div>
            <div className='topCenter'>
                <ul className='navbarList'>
                <li className='navbarListItem'>Strona główna</li>
                <li className='navbarListItem'>Zgłoś problem</li>
                <li className='navbarListItem'>Kontakt</li>
                </ul>
            </div>
            <div className='topRight'>
                Panel serwisanta
            </div>
        </div>
    )
}

export default Navbar;