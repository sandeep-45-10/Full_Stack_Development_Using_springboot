import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/Healthinsurance.css';

function HealthInsurance() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nomineeName, setNomineeName] = useState('');
  const [nomineePhone, setNomineePhone] = useState('');
  const [insuranceWorth, setInsuranceWorth] = useState('');

  const handleBuyInsurance = () => {
    if (!firstName || !lastName || !email || !phone || !nomineeName || !nomineePhone || !insuranceWorth) {
      alert('Please fill in all fields.');
    } else {
      // Send data to backend to buy insurance
      axios.post('http://localhost:8080/api/healthinsurances', {
          firstName,
          lastName,
          email,
          phone,
          nomineeName,
          nomineePhone,
          insuranceWorth
      })
      .then(response => {
          console.log(response.data);
          alert(`Health insurance has been bought worth: ${insuranceWorth}`);
      })
      .catch(error => {
          console.error('Error buying insurance:', error);
          alert('An error occurred. Please try again.');
      });
    }
  };

  return (
    <div className="containerhi">
      <div className="header">
        <h2 align="center">Health Insurance Service</h2>
      </div>
      <hr />
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input type="text" id="firstNameh" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <input type="text" id="lastNameh" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <input type="email" id="emailh" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <input type="tel" id="phoneh" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <input type="text" id="nomineeNameh" placeholder="Nominee Name" value={nomineeName} onChange={(e) => setNomineeName(e.target.value)} />
        </div>
        <div>
          <input type="tel" id="nomineePhoneh" placeholder="Nominee Phone" value={nomineePhone} onChange={(e) => setNomineePhone(e.target.value)} />
        </div>
        <div>
          <input type="number" id="insuranceWorthh" placeholder="Insurance Worth" value={insuranceWorth} onChange={(e) => setInsuranceWorth(e.target.value)} />
        </div>
        <input type="button" value="Buy Insurance" onClick={handleBuyInsurance} />
      </form>
    </div>
  );
}

export default HealthInsurance;
