import React from 'react';
import Navbar from './Navbar';
const TicketTable = () => {
  const tickets = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      contactNumber: '123-456-7890',
      ticketCategory: 'General Admission',
    },
    // Add more ticket objects here if needed
    // For the purpose of demonstration, let's add some more rows
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      contactNumber: '987-654-3210',
      ticketCategory: 'VIP',
    },
    {
      name: 'Bob Johnson',
      email: 'bob@example.com',
      contactNumber: '555-555-5555',
      ticketCategory: 'Premium',
    },
    {
      name: 'Alice Lee',
      email: 'alice@example.com',
      contactNumber: '111-222-3333',
      ticketCategory: 'General Admission',
    },
    {
      name: 'Mike Brown',
      email: 'mike@example.com',
      contactNumber: '444-444-4444',
      ticketCategory: 'VIP',
    },
  ];

  const tableStyle = {
    maxWidth: '800px', // Increase the width to fit more columns
    margin: '0 auto',
    position:'relative',
    top:'50px'
  };

  const thStyle = {
    backgroundColor: '#f2f2f2',
    padding: '16px', // Increase padding for a bigger column width
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  };

  const tdStyle = {
    padding: '16px', // Increase padding for a bigger column width
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  };

  const trHoverStyle = {
    backgroundColor: '#f9f9f9',
  };

  return (
    <><Navbar /><div style={tableStyle}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                  <tr>
                      <th style={thStyle}>Name</th>
                      <th style={thStyle}>Email</th>
                      <th style={thStyle}>Contact Number</th>
                      <th style={thStyle}>Ticket Category</th>
                  </tr>
              </thead>
              <tbody>
                  {tickets.map((ticket, index) => (
                      <tr key={index} style={trHoverStyle}>
                          <td style={tdStyle}>{ticket.name}</td>
                          <td style={tdStyle}>{ticket.email}</td>
                          <td style={tdStyle}>{ticket.contactNumber}</td>
                          <td style={tdStyle}>{ticket.ticketCategory}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div></>
  );
};

export default TicketTable;

