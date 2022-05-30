import {React, useState, useEffect} from 'react'
import Ticket from './Ticket';
import Modal from 'react-modal';
import EditTicket from './EditTicket';
import axios from 'axios';
function Tickets(props){
    const [modal, setModal] = useState(false)

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editedTicket, setEditedTicket] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get("http://localhost:6969/api/tickets");
            setData(result.data);
            setLoading(false);
        }
        fetchData();
      },[]);
    const deleteTicket = (id) =>{
        const tickets = [...data].filter(ticket => ticket._id !== id);
        axios.delete('http://localhost:6969/api/ticket/' + id);
        setData(tickets);
    }
    const editTicket = (ticket) =>{
        const tickets = [...data]

        const index = tickets.findIndex(x => x._id === ticket._id)
        if(index >=0) {
            tickets[index] = ticket;
            setData(tickets);
        }
        toggleModal();
    }
    const toggleModal = () =>{
        setModal(!modal);
    }

    const editTicketHandler = (ticket) =>{
        toggleModal();
        setEditedTicket(ticket);
        editTicket(ticket);
        
    }
    return(
        <div>
            {loading ? 
            (<div>ŁADOWANIE</div>) :
            (
                <div>
                    <h1>Twoje zgłoszenia</h1>
                    <Modal
                        isOpen={modal}
                        contentLabel="Edytuj zgłoszenie"
                    >
                        <EditTicket
                            id={editedTicket._id}
                            customerId={editedTicket.customerId}
                            technicianId={editedTicket.technicianId}
                            reportDate={editedTicket.reportDate}
                            model={editedTicket.model}
                            status={editedTicket.status}
                            customerComment={editedTicket.customerComment}
                            technicianComment={editedTicket.technicianComment}
                            onEdit={ticket => editTicket(ticket)} />
                    </Modal>
                    <div className='tickets' >
                        {data.map(ticket => (
                            <Ticket 
                                key={ticket._id}
                                id={ticket._id}
                                customerId={ticket.customerId}
                                technicianId={ticket.technicianId}
                                reportDate={ticket.reportDate}
                                model={ticket.model}
                                status={ticket.status}
                                customerComment={ticket.customerComment}
                                technicianComment={ticket.technicianComment}
                                onDelete={() => deleteTicket(ticket._id)}
                                onEdit={()=> editTicketHandler(ticket) }
                            />
                        ))}
                    </div>
                </div>
                )
            }
        </div>

    );

}

export default Tickets;