import { Container } from 'react-bootstrap';
/* import contactImage from '../assets/Contactpage.png'; */

const Contact = () => {
  const contactStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
   /*  backgroundImage: `url(${contactImage})`, */
    backgroundSize: 'cover',
   
  };

  return (
    <Container fluid style={contactStyle} id='contact'>
    <h1>Contact</h1>
      {/* Your contact section content */}
    </Container>
  );
};

export default Contact;

