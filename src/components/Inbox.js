import React, { useState, useEffect } from 'react';

const Inbox = () => {
  // States hooks to store form input values and contacts data
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [contacts, setContacts] = useState([])

  // Fetches contacts data when the component mounts
  useEffect(() => {
    // Fetches contacts data from your JSON file using the fetch API
    fetch("http://localhost:8000/contacts") 
      .then(response => response.json()) // Parses the response JSON
      .then(data => {
        setContacts(data) // Updates the state with fetched contacts data
      })
      .catch(error => {
        console.error('Error fetching contacts:', error)
      });
  }, []);

  // Handles the form submission
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Form has been submitted:", { name, email, message })
    
  }

  return (
    <div>
      <h2>Inbox</h2>
      {/* Display the list of contacts */}
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <strong>Name:</strong> {contact.fullName}<br />
            <strong>Email:</strong> {contact.email}<br />
            <strong>Message:</strong> {contact.message}<br />
          </li>
        ))}
      </ul>
      {/* Form for users to submit their information */}
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Inbox
