import React from 'react'
import { Button,TextField,Box } from '@mui/material'
//import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import Navbar from './Navbar'

import './OrganizerTicket.css'
 function OrganizerTicket() {
  const[max,setMax]=useState(0);
  const[general,setGeneral]=useState(0);
  const[premium,setPremium]=useState(0);
  const[vip,setVip]=useState(0);
  const handleTicketForm = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8080/postticket",{
      ticketid:1,
       max:max,
       general:general,
       premium:premium,
       vip:vip

    }
      )
      .then((response)=>{
        console.log(response);
        
      })
      .catch((error)=>{
        console.error(error);
      });

  };
  return (
    <div>
      <Navbar/>
                
      
        <form  className='admiss'onSubmit={handleTicketForm}>
        <center>
        <h1><center>Pricing Details</center></h1><br></br>
        <label>Maximum Number Of Attendees</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"   label="max" 
        variant="outlined" type="text" value={max} required onChange={(e) => setMax(e.target.value)}/><br />
        <br></br>
        <label>General Price</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="GENERAL price" 
        variant="outlined" type="text" value={general} required onChange={(e) => setGeneral(e.target.value)}/><br />
        <br></br>
        <label>Premium Price</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="PREMIUM price" 
        variant="outlined" type="text"value={premium} required  onChange={(e) => setPremium(e.target.value)} /><br />
        <br></br>
        <label>VIP Price</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="VIP price" 
        variant="outlined" type="text" value={vip} required onChange={(e) => setVip(e.target.value)}/><br />
        <br></br>
        

        </center>
        
       
        
        <Box textAlign="center">
        <Button variant="contained" color="secondary" input type='submit' >Register</Button>
        </Box>
        <br></br>
       
        </form>
       

    </div>
  )
}
export default OrganizerTicket;