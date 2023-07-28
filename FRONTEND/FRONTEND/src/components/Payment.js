import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './open.css';
import Navbar from './Navbar';
function Payment() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const navigate = useNavigate();

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardHolderChange = (event) => {
    setCardHolder(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission or further actions
    console.log('Form submitted successfully');

    // Navigate to the next page
    navigate('/fin');
  };

  return (
    <><Navbar /><div className="container">
          <h1>Payment Form</h1>
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                      type="text"
                      id="cardNumber"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      required />
              </div>
              <div className="form-group">
                  <label htmlFor="cardHolder">Card Holder</label>
                  <input
                      type="text"
                      id="cardHolder"
                      value={cardHolder}
                      onChange={handleCardHolderChange}
                      required />
              </div>
              <div className="form-group">
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input
                      type="text"
                      id="expiryDate"
                      value={expiryDate}
                      onChange={handleExpiryDateChange}
                      required />
              </div>
              <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                      type="text"
                      id="cvv"
                      value={cvv}
                      onChange={handleCvvChange}
                      required />
              </div>
              <button type="submit">Submit</button>
          </form>
      </div></>
  );
}

export default Payment;



