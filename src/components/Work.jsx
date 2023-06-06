
import { Container, Card, Button } from 'react-bootstrap';
/* import workImage from '../assets/Work.png'; */

const Work = () => {
  const workStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
   /*  backgroundImage: `url(${workImage})`, */
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
  };

  const cardData = [
    {
      title: 'Project 1',
      image: 'https://example.com/project1.png',
      link: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      image: 'https://example.com/project2.png',
      link: 'https://example.com/project2',
    },
    // Add more card data as needed
  ];

  return (
    <Container fluid style={workStyle} id='work'>
      <h1>Work</h1>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card key={index} style={{ width: '18rem', marginBottom: '1rem' }}>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Button variant="primary" href={card.link} target="_blank">
                Visit Website
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Work;
