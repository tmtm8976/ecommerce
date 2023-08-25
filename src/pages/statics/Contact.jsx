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
    <div className='w-full h-full'>
    <div className='h-[50vh] w-full bg-[#2e2e2e] absolute top-0 rounded-3xl -z-10'></div>
        <div className='h-[80vh] flex flex-col items-center justify-center'>
        <div className='bg-white px-20 h-3/4 flex gap-10 items-center justify-center rounded-lg shadow-lg'>
           
          <form onSubmit={handleSubmit} className='flex flex-col gap-3 font-bold'>
          <h1 className='text-[#fe9900] text-3xl mb-8'>Contact Us</h1>
            <label htmlFor="email">Email</label>
            <input type="email" className='border h-[40px]'  id="email" value={email} onChange={handleEmailChange} required />

            <label htmlFor="message">Message</label>
            <textarea  className='border h-[80px] resize-none' id="message" value={message} onChange={handleMessageChange} required></textarea>

            <button type='submit' className='px-5 py-3 bg-[#fe9900] rounded-sm mt-8 shadow-md font-bold text-white hover:scale-105 hover:ease-in-out hover:transition-transform'>Send</button>
            {isSent && <p className='text-green-500'>Message successfully sent!</p>}
          </form>
          <img src="mail.jpg" alt="" />
      </div>
        </div>
        
    </div>
    
  )
}