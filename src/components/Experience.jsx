import { Container, Row, Col } from 'react-bootstrap';
import { CardData } from './CardData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  const experienceStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'start',
    color: '#fff',
  };

  return (
    <Container fluid style={experienceStyle} id='experience'>
      <h2 style={{ padding: '50px', fontSize: '30px', fontFamily: 'Inter', fontWeight: '600', color: '#ccd6f6' }}>
        <span id='numberSection'>02.</span> Experience
      </h2>
      <div
        className='card-container'
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        <Row>
          {CardData.map((card, index) => (
            <Col key={index} xs={12} sm={6}>
              <div
                className='cardColor' // Added a class name for the card
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  borderRadius: '8px',
                  padding: '1rem',
                  transition: 'background-color 0.5s',
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  style={{ maxWidth: '150px', height: 'auto', marginRight: '1rem', paddingBottom: '20px' }}
                />
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h5 style={{ paddingLeft: '20px', fontSize: '22px', fontFamily: 'Inter', fontWeight: '600' }}>
                      {card.title}
                    </h5>
                    <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginLeft: '5px' }} />
                  </div>
                  <p style={{ maxWidth: '500px', paddingLeft: '20px' }}>{card.description}</p>
                  <div style={{ display: 'flex', paddingLeft: '20px', marginTop: '10px' }}>
                    {card.skills.map((skill, index) => (
                      <span className='borderStyle' key={index} style={{ marginRight: '10px', color: 'rgb(240, 71, 255)', }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Experience;









