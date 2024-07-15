import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/Telemedicine.css';

function Telemedicine() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleBookAppointment = () => {
    if (!firstName || !lastName || !email || !phone || !problemDescription || !date || !time) {
      alert('Please fill in all fields.');
    } else {
      console.log(firstName + " " + lastName);
      // Send data to backend to book telemedicine appointment
      axios.post('http://localhost:8080/api/telemedicines', {
          firstName,
          lastName,
          email,
          phone,
          problemDescription,
          date,
          time
      })
      .then(response => {
          console.log(response.data);
          alert(`Booked a Telemedicine service call on ${date} at ${time}.`);
      })
      .catch(error => {
          console.error('Error booking telemedicine appointment:', error);
          alert('An error occurred. Please try again.');
      });
    }
  };

  return (
    <div className="containertel">
      <div className="header">
        <h2 align="center">Telemedicine Service</h2>
      </div>
      <hr />
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input type="text" id="telFirstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <input type="text" id="telLastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <input type="email" id="telEmail" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <input type="tel" id="telPhone" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <textarea id="telProblemDescription" placeholder="Problem Description" value={problemDescription} onChange={(e) => setProblemDescription(e.target.value)} />
        </div>
        <div>
          <input type="date" id="telDate" min={new Date().toISOString().split('T')[0]} value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <input type="time" id="telTime" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
        <input type="button" value="Book" onClick={handleBookAppointment} />
      </form>
    </div>
  );
}

export default Telemedicine;
