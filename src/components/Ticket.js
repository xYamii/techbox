import React from 'react'
import {useParams} from "react-router-dom";
function Ticket() {
    let { id } = useParams();

    

    return (
        <div className='home-main'>
        <h1>
            Twoje zgłoszenie o numerze {id}
        </h1>
        <p>
            aby zgłosić potrzebę serwisu wciśnij przycisk
        </p>
            <button> ZGŁOŚ SERWIS</button>
        <p>
            aby sprawdzić status zgłoszenia wprowadź numer zgłoszenia i wciśnij przycisk:
        </p>
            <input type="text" placehoder="Wprowadź numer zgłoszenia" />
            <button> SPRAWDŹ</button>
    </div>
    )
}

export default Ticket;