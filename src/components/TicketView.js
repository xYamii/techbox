import {React, useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios';

function TicketView() {
    let { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get("http://localhost:6969/api/ticket/"+id);
            setData(result.data);
        }
        fetchData();
      },[]);
    return (
        <div className='center'>
            <h1>
                Twoje zgłoszenie o numerze {data._id}
            </h1>
            <label htmlFor="customerId">Klient</label>
            <input type="text" name="customerId" value={data.customerId} disabled={true}/>
            <label htmlFor="technicianId">Odpowiedzialny</label>
            <input type="text" name="technicianId" value={data.technicianId} disabled={true}/>
            <label htmlFor="reportDate">Data zgłoszenia</label>
            <input type="text" name="reportDate" value={data.reportDate} disabled={true}/>
            <label htmlFor="model">Model urządzenia</label>
            <input type="text" name="model" value={data.model} disabled={true}/>
            <label htmlFor="status">Status zgłoszenia</label>
            <input type="text" name="status" value={data.status} disabled={true}/>
            <label htmlFor="customerComment">Komentarz klienta</label>
            <input type="text" name="customerComment" value={data.customerComment} disabled={true}/>
            <label htmlFor="technicianComment">Komentarz serwisanta</label>
            <input type="text" name="technicianComment" value={data.technicianComment} disabled={true} />
    </div>
    )
}

export default TicketView;