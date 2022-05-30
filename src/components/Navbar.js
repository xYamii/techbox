import React from 'react'
import chomik from '../img/chomik.gif'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className='top'> 
            <div className='topLeft'>
                <img src={chomik} alt="chomikers"/>
                    <p>TechBox</p>
                </div>
            <div className='topCenter'>
                <ul className='navbarList'>
                <Link to="/">
                    <li className='navbarListItem'>Strona główna</li>
                </Link>
                <Link to="/report">
                    <li className='navbarListItem'>Zgłoś problem</li>
                </Link>
                <Link to="/contact">
                    <li className='navbarListItem'>Kontakt</li>
                </Link>
                </ul>
            </div>
            <div className='topRight'>
            <Link to="/tickets">
                Panel serwisanta
            </Link>
            </div>
        </div>
    )
}

export default Navbar;