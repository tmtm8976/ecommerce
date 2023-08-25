import React, { useState } from 'react'

export const Contact = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSent, setIsSent] = useState(false)

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`Email: ${email}, Message: ${message}`)
    setIsSent(true)
    // Send email or message to server here
  }

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={handleMessageChange} required></textarea>

        <button type="submit">Send</button>
      </form>
      {isSent && <p>Message successfully sent!</p>}
    </div>
  )
}