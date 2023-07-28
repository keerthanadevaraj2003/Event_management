import React, { useState } from 'react';
import "./AllEvents.css";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import {ImCross} from 'react-icons/im'
import {useEffect} from "react";
import axios from 'axios';
const AllEvents = () => {
  const[data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/get`)
    .then(response => {
        setData(response.data);
        console.log(data.event_name);
    })
    .catch(error => {
        console.log(error);
    })
  },[]);
 

  const [task,settask]=useState(false);
 const handletask = () => {
  settask(!task);
}

  return (
    <>
      <Navbar />
      <div className="event-container">
        {data.map((event) => (
          <div className="event-row">
            {/* <img src={event.imageUrl} alt={event.eventName} className="event-image" /> */}
            <div className="event-details">
              <h3 className="event-name" style={{ display: 'inline-block', width: '500px' }}>
                {event}
              </h3>
              <button className="details-button" onClick={handletask}>
               DETAILS
              </button>
              <Link to="/tick">
                <button className="details-button">Attendee Info</button>
              </Link>
             
              
            </div>
          </div>
        ))}
        {task &&  
    <div className="form-overlay">
      <div classame ="form-container">
        <center>
      
      <div className="formtask">
      <form  className="Taskform">
      <ImCross style={{color:'red',position:'relative',left:'240px',bottom:'15px',padding:'4px',fontSize:'20px' }} onClick={handletask} />
        <div>
        <h4>EVENT START DATE:15/07/2023</h4>
        </div>
        <br/>
        <div>
       <h4>EVENT END DATE:21/07/2023</h4>
        </div>
        <br/>
        <div>
        <h4>EVENT VENUE:PALANI</h4>
        </div>
        <br />
        <div>
       <h4>EVENT TYPE:CONCERT</h4>
        </div>
        <br />
       
       
        <br />
        
      </form>
      </div>
        </center>
    </div> 
    </div>
    }
      </div>
    </>
  );
};

export default AllEvents;




