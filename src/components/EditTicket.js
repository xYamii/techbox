import {React, useState} from 'react'
import axios from 'axios';

export default function EditTicket(props) {

    const [status, setStatus] = useState(props.status);
    const [technicianComment, setTechnicianComment] = useState(props.technicianComment);

    const changeStatusHandler = event => {
        const value = event.target.value;
        setStatus(value);
      }  
      const changeCommentHandler = event => {
        const value = event.target.value;
        setTechnicianComment(value);
      }

    const editTicket = () => {
        const ticket = {
          status,
          technicianComment,
          _id: props.id
        };
        props.onEdit(ticket);
        const updatedTicket = {
          "_id": props.id,
          "customerId": props.customerId,
          "technicianId": props.technicianId,
          "reportDate": props.reportDate,
          "model":props.model,
          "status":status,
          "customerComment":props.comment,
          "technicianComment":technicianComment
        } 
        axios.put('http://localhost:6969/api/ticket/' + props.id,updatedTicket);
      }
    return (
        <div className='center'>
            <label htmlFor="customerId">Klient</label>
            <input type="text" name="customerId" value={props.customerId} disabled={true}/>
            <label htmlFor="technicianId">Odpowiedzialny</label>
            <input type="text" name="technicianId" value={props.technicianId} disabled={true}/>
            <label htmlFor="reportDate">Data zgłoszenia</label>
            <input type="text" name="reportDate" value={props.reportDate} disabled={true}/>
            <label htmlFor="model">Model urządzenia</label>
            <input type="text" name="model" value={props.model} disabled={true}/>
            <label htmlFor="status">Status zgłoszenia</label>
            <input type="text" name="status" value={status} onChange={changeStatusHandler}/>
            <label htmlFor="customerComment">Komentarz klienta</label>
            <input type="text" name="customerComment" value={props.customerComment} disabled={true}/>
            <label htmlFor="technicianComment">Komentarz serwisanta</label>
            <input type="text" name="technicianComment" value={technicianComment} onChange={changeCommentHandler} />
            <button onClick={() => editTicket()}> Zapisz</button>

    </div>
    );
}