import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/Appointment.css';

const AppointmentPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [availableDoctors, setAvailableDoctors] = useState([]);
  
  const handleConsult = (doctorName) => {
    // Send booking details to backend
    axios.post('http://localhost:8080/api/appointments', {
        firstName,
        lastName,
        phone,
        email,
        date,
        startTime,
        endTime,
        problemDescription,
        doctorName
    })
    .then(response => {
        console.log(response.data);
        alert(`Appointment booked with ${doctorName}`);
    })
    .catch(error => {
        console.error('Error booking appointment:', error);
        alert('An error occurred while booking appointment. Please try again.');
    });
  };
  
  const handleCheckAvailability = () => {
    // Assuming the doctors' availability is stored in an array
    const doctorsAvailability = [
      { name: 'Dr. John Dester', availableFrom: '18:00', availableTo: '02:00' },
      { name: 'Dr. Anup Jaydev', availableFrom: '19:00', availableTo: '05:00' },
      { name: 'Dr. Suhasini Mishra', availableFrom: '10:00', availableTo: '19:00' },
      { name: 'Dr. Liza Hendriks', availableFrom: '08:00', availableTo: '17:00' },
      { name: 'Dr. Akanksha Shrivastav', availableFrom: '06:00', availableTo: '15:00' },
      { name: 'Dr. Xavier Doherty', availableFrom: '22:00', availableTo: '07:00' },
    ];

    const selectedDoctors = doctorsAvailability.filter(doctor => {
      // Convert start and end times to Date objects
      const start = new Date(`2000-01-01T${startTime}`);
      const end = new Date(`2000-01-01T${endTime}`);
      const availableFrom = new Date(`2000-01-01T${doctor.availableFrom}`);
      const availableTo = new Date(`2000-01-01T${doctor.availableTo}`);

      // Check if the appointment range overlaps with the doctor's availability range
      return (start <= end && (start >= availableFrom && end <= availableTo)) ||
        (start > end && (start >= availableFrom || end <= availableTo));
    });

    if (selectedDoctors.length === 0) {
      alert('No doctors available within the specified time range. Please choose another time.');
    } else {
      setAvailableDoctors(selectedDoctors);
    }
  };

  return (
    <div className="containerapp">
      <div className="header">
        <h2 align="center">Book an Appointment</h2>
      </div>
      <hr />
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder='Enter your first name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder='Enter your last name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder='Enter your phone number'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="date"
          name="date"
          id="date"
          placeholder='Select appointment date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={new Date().toISOString().split('T')[0]} // Set the min attribute to today's date
        />
 
        <input
          type="time"
          name="startTime"
          id="startTime"
          placeholder='Select starting time'
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
        <input
          type="time"
          name="endTime"
          placeholder='Select ending time'
          id="endTime"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />

        <textarea
          name="problemDescription"
          id="problemDescription"
          placeholder='Describe the reason for your appointment'
          value={problemDescription}
          onChange={(e) => setProblemDescription(e.target.value)}
        />
        
        <input type="button" value="Check Availability" onClick={handleCheckAvailability} />
      </form>
      <div className="availableDoctors">
        {availableDoctors.length > 0 && (
          <div>
            <h3>Available Doctors:</h3>
            <ul>
              {availableDoctors.map((doctor, index) => (
                <li key={index}>
                  {doctor.name} :
                  <input type="button" value="Consult" onClick={() => handleConsult(doctor.name)} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentPage;
