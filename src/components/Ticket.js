import React from 'react'

function Ticket(props) {

    const editHandler = () => {
        props.onEdit({ 
            status: props.status, 
            technicianComment: props.technicianComment, 
            _id: props.id 
          });
      }

    return (
        <div className='ticket'>
            <h1>
                Twoje zgłoszenie o numerze {props.id}
            </h1>
            <label forhtml="customerId">Klient</label>
            <input type="text" name="customerId" value={props.customerId} disabled={true}/>
            <label forhtml="technicianId">Odpowiedzialny</label>
            <input type="text" name="technicianId" value={props.technicianId} disabled={true}/>
            <label forhtml="reportDate">Data zgłoszenia</label>
            <input type="text" name="reportDate" value={props.reportDate} disabled={true}/>
            <label forhtml="model">Model urządzenia</label>
            <input type="text" name="model" value={props.model} disabled={true}/>
            <label forhtml="status">Status zgłoszenia</label>
            <input type="text" name="status" value={props.status} readOnly={true}/>
            <label forhtml="customerComment">Komentarz klienta</label>
            <input type="text" name="customerComment" value={props.customerComment} disabled={true}/>
            <label forhtml="technicianComment">Komentarz serwisanta</label>
            <input type="text" name="technicianComment" value={props.technicianComment} readOnly={true}/>
            <button onClick={editHandler} >edytuj</button>
            <button 
                className="delete" 
                onClick={() => props.onDelete(props.id)}>usuń</button>
    </div>
    )
}

export default Ticket;