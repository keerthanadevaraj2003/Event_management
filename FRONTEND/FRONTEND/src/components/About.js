import React from 'react'
import "./About.css";
function About() {
  return (
    <div>
    <div className="about-section">
  <h1>About Us</h1>
  <p>The GREENHILLS PUBLIC SCHOOL is a Senior Secondary School affiliated to the CBSE New Delhi. The school is located at Moolankave, 3kms from SulthanBathery amidst a sylvan surroundings on Calicut- Mysore National Highway. It is a centre for academic excellence which aims to provide its students with most modern educational facilities to grow and branchout. Still the school offers a strong reinforcement for the retention of our traditional values while moulding the individuals. The calm, serene, fascinating tranquility of the campus is conducive to bring forth the entire life refreshing and sustaining We promote resilience, persistence and independent learning strategies to foster lifelong learning capabilities that prepare our students for the 21st century The School is a unit of Meenakshi Charitable Trust and it was established in 2001. </p>

</div>

 <h2 style={{textAlign:'center'}}>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
    <img src="https://media.istockphoto.com/id/144324264/photo/business-abroad.jpg?s=612x612&w=0&k=20&c=UgWVzVEya-YQOgGk4McE8vYQj_QDzo7fCip41Ian45A=" alt="Mike" style={{width:"400px",height:"300px"}} ></img>
      <div className="container">
        <h2>Sam</h2>
        <p className="title">Founder</p>
        
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1c2luZXNzJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Mike" style={{width:"400px",height:"300px"}} ></img>
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Principal</p>
        
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
    <img src="https://t4.ftcdn.net/jpg/06/01/02/71/360_F_601027181_JYZAvwl48pCllc8936XsGOLOGhSY09aV.jpg" alt="Mike" style={{width:"400px",height:"300px"}} ></img>
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Chairman</p>
        
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div> 
    </div> 
  )
}

export default About