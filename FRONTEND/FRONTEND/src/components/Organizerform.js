import React, { useState } from 'react'
import { Button,TextField,Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'

import './Organizer.css'
 function Admission() {

    const[fname , setFname] = useState("");
    const[lname , setLname] = useState("");
    const[ename , setEname] = useState("");
    const[eventType , seteventType ] = useState("");
    const[startDate , setstartDate ] = useState("");
    const[endDate , setendDate ] = useState("");
    const[venue, setvenue ] = useState("");
    const navigate=useNavigate();


    const handleOrganizerForm = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/add",{
            first_name:fname,
            last_name:lname,
            event_name:ename,
            event_start_date:startDate,
            event_end_date:endDate,
            venue:venue,
            event_type:eventType,
            aadhar:"qwertyuio",
            license:"qwertyuioplkjhgfdsa"
    
        }
          )
          .then((response)=>{
            console.log(response);
            navigate("/orgtick");
            
          })
          .catch((error)=>{
            console.error(error);
          });
    
      };
  return (
    <div>
      <Navbar/>
                
        
        <form  className='admiss' onSubmit={handleOrganizerForm}>
        <center>
        <h1><center>Registration Form</center></h1><br></br>
        <label>First Name</label><br></br>
        <br></br>
        <TextField id ="outlined-basic" value = {fname}  label="First Name" onChange={(e) => setFname( e.target.value)}
        variant="outlined" type="text" required /><br />
        <br></br>
        <label>Last Name</label><br></br>
        <br></br>
        <TextField id ="outlined-basic" value ={lname} label="Last Name" onChange={(e) => setLname( e.target.value)}
        variant="outlined" type="text" required /><br />
        <br></br>
        <label>Event Name</label><br></br>
        <br></br>
        <TextField id ="outlined-basic" value={ename} label="Event Name"  onChange={(e) => setEname( e.target.value)}
        variant="outlined" type="text" required /><br />
        <br></br>
        <label>Event Type</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  value={eventType} label="Event Type" onChange={(e) => seteventType( e.target.value)}
        variant="outlined" type="text" required /><br />
        <br></br>
        <label>Event start date</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  value={startDate} onChange={(e) => setstartDate( e.target.value)}
        variant="outlined" type="date" required /><br />
        <br></br>
        <label>Event End Date</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"   value={endDate} onChange={(e) => setendDate( e.target.value)}
        variant="outlined" type="date" required /><br />
        <br></br>
        <label>Venue</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="gender"  value={venue} onChange={(e) => setvenue( e.target.value)}
        variant="outlined" type="select" required /><br />
        <br></br>
       
        <label>Upload AAdhar</label><br></br>
        <br/>
        <TextField id ="outlined-basic"  
        variant="outlined" type="file" required /><br />
        <br></br>
        <label>Upload License</label><br></br>
        <br/>
        <TextField id ="outlined-basic"  
        variant="outlined" type="file" required /><br />
        <br></br>
        
        
        <br/>
        

        </center>
        
       
        
        <Box textAlign="center">
        <Button variant="contained" color="secondary" input type='submit' >Register</Button>
        </Box>
        <br></br>
       
        </form>
       

    </div>
  )
}
export default Admission;