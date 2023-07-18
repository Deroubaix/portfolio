import { useState } from 'react';
import { Container } from 'react-bootstrap';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setError(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(false);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError(true);
      return;
    }

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
        setIsSent(true);
        console.log('Email sent successfully');
        setTimeout(() => {
          setIsSent(false);
        }, 3000);
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
    fontFamily: 'Inter, sans-serif',
    color: '#8892b0',
    marginTop: '1rem',
    marginBottom: '2rem',
  };

  const messageStyle = {
    paddingTop: '1rem',
    color: isSent ? '#64ffda' : 'red',
    fontSize: '12px'
  };

  return (
    <Container fluid style={contactStyle}>
      <h1 style={headingStyle}>03. What’s next?</h1>
      <h2 style={subheadingStyle}>Get In Touch</h2>
      <p className='paragraph-style' style={paragraphStyle}>
        Want to collaborate, offer me a job, or have any questions? Submit the <br /> form below, and I will get back to you as soon as possible.
      </p>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            className='form-control rounded border-white mb-3 form-input'
            type='text'
            name='name'
            autoComplete='name'
            placeholder='Enter your name'
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className='form-group'>
          <input
            className='form-control rounded border-white mb-3 form-input'
            type='email'
            name='email'
            autoComplete='email'
            placeholder='Enter your email'
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className='form-group'>
          <textarea
            className='form-control rounded border-white mb-3 form-text-area'
            rows='5'
            cols='30'
            name='message'
            autoComplete='off'
            placeholder='Enter your message'
            value={message}
            onChange={handleMessageChange}
          />
        </div>
        <div className='submit-button-wrapper' id='contact'>
          <button className='submit-button' type='submit' disabled={isSent}>
            Send
          </button>
        </div>
      </form>
      <div className='message-container'>
        {error && <p style={messageStyle}>Please fill out all fields.</p>}
        {isSent && <p style={messageStyle}>Message sent successfully!</p>}
      </div>
      <style>
        {`
          .form-group {
            width: 100%;
            margin: 0 auto;
          }

          .form-input,
          .form-text-area {
            width: 100%;
            max-width: 400px;
          }

          @media (max-width: 768px) {
            .form-input,
            .form-text-area {
              max-width: 100%;
            }
          }

          @media (max-width: 576px) {
            .submit-button {
              font-size: 14px;
              padding: 10px 20px;
            }
          }

          @media (max-width: 576px) {
            p.paragraph-style {
              font-size: 10px;
            }
          }
        `}
      </style>
    </Container>
  );
};

export default Contact;
















