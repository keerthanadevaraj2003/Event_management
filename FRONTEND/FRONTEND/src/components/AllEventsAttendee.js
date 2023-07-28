import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllEventAttendee.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
export default function AllEventsAttendee() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/getAll') // Replace with your backend URL
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:8080/getAllTick') // Replace with your backend URL
      .then(response => {
        setData1(response.data);
        console.log(data1)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>All Events</h2>
      {data.map(event => (
        <div key={event.event_id} className="event-card">
          <h3 className="event-name">{event.event_name}</h3>
          <p className="event-date">Date: {event.event_start_date} - {event.event_end_date}</p>
          <p className="event-location">Venue: {event.venue}</p>
          <Link to ="/payment"><button>Book Now </button></Link>
          {/* Add more details as needed */}
        </div>
      ))}
      {data1.map(ev => (
        <div key={ev.ticket_id}>
          <h3 className="event-name">{ev.event_name}</h3>
          <p className="event-date">General: {ev.general}</p>
          <p className="event-location">Premium: {ev.premium}</p>
          <p className="event-location">VIP: {ev.vip}</p>
          <Link to ="/payment"><button>Book Now </button></Link>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
}
