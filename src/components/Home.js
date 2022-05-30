import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    const [ticketId, setTicketId] = useState('')

    const findTicket = () => {
        navigate('/ticket/'+ticketId)
    }
    return (
    <div className='home-main'>
        <h1>
            Witaj na stronie TechBox,
        </h1>
        <p>
            aby zgłosić potrzebę serwisu wciśnij przycisk
        </p>
            <button onClick={() => navigate('/report')}> ZGŁOŚ SERWIS</button>
        <p>
            aby sprawdzić status zgłoszenia wprowadź numer zgłoszenia i wciśnij przycisk:
        </p>
            <input type="text" placehoder="Wprowadź numer zgłoszenia" id='ticketNumber' onChange={event => setTicketId(event.target.value)}/>
            <button onClick={findTicket}> SPRAWDŹ</button>
    </div>
  )
}
