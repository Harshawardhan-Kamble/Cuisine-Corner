import React, { useState } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };
  const position = [51.505, -0.09];

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={handleMessageChange} required />

        <button type="submit">Submit</button>
      </form>
      {/* <div className="map-container">
        <Map center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="http://tile.openstreetmap.org/13/4096/3659.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              A sample location <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div> */}
    </div>
  );
};

export default ContactUs;
