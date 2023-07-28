import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Admission from './components/Organizerform';
import Homepage from './components/Event'
import AllEvents from './components/AllEvents';
import TicketTable from './components/TicketTable';
import Loginpage from './components/Login';
import Signpage from './components/Signpage';
import OrganizerTicket from './components/OrganizerTicket';
import AdminHome from './components/AdminHome';
import First from './components/First';
import AdminLogin from './components/AdminLogin';
import AllEventsAttendee from './components/AllEventsAttendee';
import Payment from './components/Payment';
import Final from './components/Final';
import { useState } from 'react';
import FeedBack from './components/feedback';
import store from './components/store';
import { Provider } from 'react-redux';
function App() {
  const[name,setname]=useState("");
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Loginpage setname={setname}/>}/>  
      <Route path="/login" element={<Loginpage setname={setname}/>}/>
      <Route path="/adminlogin" element={<AdminLogin/>}/>
      <Route path="/attendeeAllEvent" element={<AllEventsAttendee/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/signup" element={<Signpage/>}/>
      <Route path="/home" element={<Homepage name={name}/>}/>
      <Route path="/org" element={<Admission/>}/>
      <Route path="/all" element={<AllEvents/>}/>
      <Route path="/tick" element={<TicketTable/>}/>
      <Route path="/orgtick" element={<OrganizerTicket/>}/>
      <Route path="/adminhome" element={<AdminHome/>}/>
      <Route path="/fin" element={<Final/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/feed" element={<FeedBack/>}/>
       {/* <Route path="/signup" element={<Signpage />}/>
      <Route path="/bar" element={<Navbar/>}/>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/sell" element={<Admission/>}/>
      
      <Route path="/mens" element={<Menswear/>}/>
      <Route path="/womens" element={<Womenswear/>}/>
      <Route path="/arts" element={<Arts/>}/>
      <Route path="/ant" element={<Antique/>}/>
      <Route path="/pro" element={<Products/>}/>
      <Route path="/clk" element={<ProductDetailPage/>}/> */} 

      
    </Routes>
  </BrowserRouter>
  </Provider>
  );
}

export default App;
