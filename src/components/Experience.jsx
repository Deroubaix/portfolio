import { Container, Row, Col } from 'react-bootstrap';
import { CardData } from './CardData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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

  const handleLinkClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <Container fluid style={experienceStyle} id='experience'>
      <h2 className='card-place' style={{ paddingBottom: '80px', fontSize: '30px', fontFamily: 'Inter', fontWeight: '600', color: '#ccd6f6' }}>
        <span id='numberSection'>02.</span> Experience
      </h2>
      <div
        className='card-container'
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          marginBottom: '20px'
        }}
      >
        <Row>
          {CardData.map((card, index) => (
            <Col key={index} xs={12} sm={6}>
              <div
                className='cardColor'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  borderRadius: '8px',
                  padding: '1rem',
                  transition: 'background-color 0.5s',
                  cursor: 'pointer',
                }}
                onClick={() => handleLinkClick(card.link)}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  style={{ maxWidth: '150px', height: 'auto', paddingBottom: '20px' }}
                />
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h5 className='cardTitle' style={{ paddingLeft: '20px', fontSize: '22px', fontFamily: 'Inter', fontWeight: '600' }}>
                      {card.title}
                    </h5>
                    <div>
                      {card.git && (
                        <a href={card.git} target='_blank' rel='noopener noreferrer'>
                          <FontAwesomeIcon icon={faGithub} className='linkGit' onClick={(e) => e.stopPropagation()} />
                        </a>
                      )}
                      {card.link && (
                        <FontAwesomeIcon
                          icon={faExternalLinkAlt}
                          className='cardLink'
                          style={{ paddingLeft: '20px', cursor: 'pointer' }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLinkClick(card.link);
                          }}
                        />
                      )}
                    </div>
                  </div>
                  <p style={{ maxWidth: '500px', paddingLeft: '20px' }}>{card.description}</p>
                  <div style={{ display: 'flex', paddingLeft: '20px', marginTop: '10px' }}>
                    {card.skills.map((skill, index) => (
                      <span className='borderStyle' key={index} style={{ marginRight: '10px', color: 'rgb(240, 71, 255)' }}>
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

      <style>
        {`
          @media (max-width: 768px) {
            .card-container {
              max-width: 500px;
            }
            .card-place {
              padding-top: 100px;
            }
            .cardColor {
              flex-direction: column;
              align-items: flex-start;
            }
            .cardColor img {
              margin-bottom: 10px;
            }
            .cardColor .cardTitle {
              font-size: 18px;
              margin-bottom: 5px;
            }
            .cardColor .cardLink {
              margin-top: 10px;
            }
          }
        `}
      </style>
    </Container>
  );
};

export default Experience;















