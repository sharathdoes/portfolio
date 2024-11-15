import React, { useState } from 'react';
import emailjs from 'emailjs-com';  // Make sure to install EmailJS

function Notes() {
  // State to manage the input fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const serviceId = 'service_j2fwcau';  // Replace with your EmailJS service ID
  const templateId = 'template_pl81mq4';  // Replace with your EmailJS template ID
  const publicKey = '3JmYGhIEk3Pfey6YD';  // Replace with your EmailJS public key

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with dynamic template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Web Wizard',
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
      });
  };

  return (
    <div className="flex justify-center    ">
      <div className="w-full max-w-md  pb-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-6">Send a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-300">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 text-white rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-300">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 text-white rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-gray-300">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 text-white rounded-lg h-16"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Notes;
