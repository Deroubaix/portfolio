import { useState } from 'react';
import { Container } from 'react-bootstrap';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Error sending email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }

    setName('');
    setEmail('');
    setMessage('');
  };

  const contactStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
  };

  const headingStyle = {
    fontSize: '20px',
    marginBottom: '1.5rem',
    color: '#f57dff',
    fontFamily: 'SF Mono,Fira Code,Fira Mono,Roboto Mono, monospace',
  };

  const subheadingStyle = {
    fontSize: '50px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '700',
    color: '#ccd6f6',
  };

  const paragraphStyle = {
    fontSize: '1.2vw',
    fontFamily: 'Inter, sans-serif',
    color: '#8892b0',
    marginTop: '1rem',
    marginBottom: '2rem',
  };


  return (
    <Container fluid style={contactStyle} id='contact'>
      <h1 style={headingStyle}>03. What’s next?</h1>
      <h2 style={subheadingStyle}>Get In Touch</h2>
      <p style={paragraphStyle}>
        Feel free to contact me by submitting the form below, and I will get back <br/> to you as soon as possible.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input className="form-control rounded border-white mb-3 form-input" type='text' name="name" autoComplete="name" placeholder='Enter your name' value={name} onChange={handleNameChange} />
        </div>
        <div className="form-group">
          <input className="form-control rounded border-white mb-3 form-input" type='email' name="email" autoComplete="email" placeholder='Enter your email' value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group ">
          <textarea className="form-control rounded border-white mb-3 form-text-area"  rows="5" cols="30" name="message" autoComplete="off" placeholder='Enter your message' value={message} onChange={handleMessageChange} />
        </div>
        <div className="submit-button-wrapper">
          <button className="submit-button" type='submit'>Send</button>
        </div>
      </form>
    </Container>
  );
};

export default Contact;



