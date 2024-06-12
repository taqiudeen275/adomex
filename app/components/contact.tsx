    import React, { useState } from 'react'

const Contacts = () => {
    return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-16" id='contact'>
            <div className="my-8 ">
                <h1 className='text-center font-extrabold  bg-clip-text text-primary text-5xl m-3 pb-4'>Contact</h1>
                <ContactDetails />
                <ContactForm />
            </div>
            </div>
    )
}

export default Contacts


const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Here, you can add your logic to send the form data to your backend or email service
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className=" py-4">
      <div className="max-w-md mx-auto bg-white rounded-lg  p-8">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

import { FaFacebook, FaGoogle, FaGooglePlus, FaTiktok  } from 'react-icons/fa';

const ContactDetails = () => {
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto bg-white p-8">
        <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Headquarters</h3>
            <p>Daboya</p>

            <h3 className="text-lg font-semibold mt-6 mb-2">Contacts</h3>
            <ul className="list-disc pl-4">
              <li>0248478492</li>
              <li>0246652103</li>
              <li>0277869284</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-2">Social Media</h3>
            <p>
              <FaFacebook className="inline-block text-blue-600 mr-2" />
              James Addo (Adomex)
            </p>
            <p>
              <FaTiktok className="inline-block text-black mr-2" />
              Adomex 1
            </p>
            <h3 className="text-lg font-semibold mt-6 mb-2">Email</h3>
            <p>
              <FaGoogle className="inline-block text-black mr-2" />
            Adomexenterprise@gmail.com
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">Working Hours</h3>
            <ul className="list-disc pl-4">
              <li>Saturday: 6:30–11 pm</li>
              <li>Sunday: 6 am–11 pm</li>
              <li>Monday: 6 am–11 pm</li>
              <li>Tuesday: 6 am–11 pm</li>
              <li>Wednesday: 6 am–11 pm</li>
              <li>Thursday: 6 am–11 pm</li>
              <li>Friday: 6 am–5:45 pm</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15739.09551869116!2d-1.3841882!3d9.5283647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd3ed21c6a5f8ed%3A0x4d37986f5d0eb41e!2sADOMEX%20PLUS%20CHEMICALS%20AND%20MEDICAL%20DIAGNOSTICS%20CENTRE!5e0!3m2!1sen!2sus!4v1717506188865!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              loading="lazy"
             
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
