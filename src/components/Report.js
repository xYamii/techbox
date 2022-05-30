import {React, useState} from "react";
import axios from 'axios';

function Report() {
  
  const [customer,setCustomer] = useState('');
  const [model,setModel] = useState('');
  const [comment,setComment] = useState('');
  const [message,setMessage] = useState('');
  const changeCustomerHandler = event => {
    const value = event.target.value;
    setCustomer(value);
  }
  const changeModelHandler = event => {
    const value = event.target.value;
    setModel(value);
  }
  const changeCommentHandler = event => {
    const value = event.target.value;
    setComment(value);
  }
  const submitTicket = () => {
    const ticket = {
      "customerId": customer,
      "technicianId": "Jan Kowalski",
      "reportDate": new Date(),
      "model":model,
      "status":"Nowe zgłoszenie",
      "customerComment":comment,
      "technicianComment":""
    };
    axios.post("http://localhost:6969/api/ticket",ticket);
    setComment('');
    setModel('');
    setCustomer('');
    setMessage('ZAPISANO')
  }

  return (
    <div className='home-main'>
      <h1>{message}</h1>
        <div className="rendered-form">
          <div className="formbuilder-text form-group field-customer-name">
            <label forhtml="customer-name" className="formbuilder-text-label">
              Imię i nazwisko<span className="formbuilder-required">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="customer-name"
              access="false"
              id="customer-name"
              required="required"
              aria-required="true"
              value={customer}
              onChange={changeCustomerHandler}
            />
          </div>
          <div className="formbuilder-text form-group field-model">
            <label forhtml="model" className="formbuilder-text-label">
              Model<span className="formbuilder-required">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="model"
              access="false"
              id="model"
              required="required"
              aria-required="true"
              value={model}
              onChange={changeModelHandler}
            />
          </div>
          <div className="formbuilder-text form-group field-comment">
            <label forhtml="comment" className="formbuilder-text-label">
              Komentarz
            </label>
            <input
              type="text"
              className="form-control"
              name="comment"
              access="false"
              id="comment"
              value={comment}
              onChange={changeCommentHandler}
            />
          </div>
          <button onClick={submitTicket}>Zgłoś</button>
        </div>
    </div>
  );
}

export default Report;
