import React from 'react'
import './first.css'
import { Button, TextField, Box } from '@mui/material'
import { Link } from 'react-router-dom'

export default function First() {
  return (
    <div>
    <div className='first'>
    <h1 className='hi'><center>DIZZO EVENT MANAGEMENT</center></h1>
         <h3 className='hello'><center>Attendee Login</center></h3>
         <Box textAlign="center">
          <Link to="/adminlogin"><Button variant="contained" color="primary" type="submit">
            ATTENDEE
          </Button>
          </Link>
        </Box>
       
        <h3 className='hello'><center>User Login</center></h3>
         <Box textAlign="center">
         <Link to="/login"><Button variant="contained" color="primary" type="submit">
            USER
          </Button>
          </Link>
        </Box>
        </div>
    </div>
  )
}