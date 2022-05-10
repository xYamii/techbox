import React from 'react'

export default function Home() {
  return (
    <div className='home-main'>
        <h1>
            Witaj na stronie TechBox,
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
