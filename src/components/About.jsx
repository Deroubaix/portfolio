import { Container, Row, Col } from 'react-bootstrap';
import MePhoto from '../assets/me.jpg';
import { useMediaQuery } from 'react-responsive';

const About = () => {

  const isMobile = useMediaQuery({ maxWidth: 991 });

  const sectionStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
  };

  const aboutTextStyle = {
    marginBottom: '20px',
    textAlign: 'start',
    
  };

  const linkStyle = {
    color: '#f57dff',
    textDecoration: 'none',
    fontFamily: 'Inter',
  };

  const imageStyle = {
    maxWidth: '300px',
    height: 'auto',
  };

  const hrStyle = {
    position: 'relative',
    display: 'inline-block',
    width: isMobile ? '90%': '65%',
    borderTop: '1px solid #fff',
    marginLeft: '10px',
    verticalAlign: 'middle',
  };

  const ulStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 200px))',
    gap: '0px 5px',
    padding: '0px',
    margin: '10px 0px 0px',
    overflow: 'hidden',
    listStyle: 'none',
    textAlign: 'start',
  };

  return (
    <div style={sectionStyle} id="about">
      <Container>
        <h2 style={{ paddingBottom: '50px', fontSize: '30px', fontFamily: 'Inter', fontWeight: '600', color: '#ccd6f6' }}>
          <span id="numberSection">01.</span> About Me
          <hr style={hrStyle} />
        </h2>
        <Row>
          <Col xs={12} md={6}>
            <div className="about-text" style={aboutTextStyle}>
              <p>
                Hello! My name is Marisha and I enjoy creating things that live on the internet. My interest in programming
                started back in 2017 when I decided I wanted to build apps — turns out seeing multiple videos and courses
                online taught me a lot about{' '}
                <a
                  href="https://en.wikipedia.org/wiki/Object-oriented_programming"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  <span className='wordSize'>Object-oriented programming (OOP)</span>
                </a>
                , and that’s when I fell in love with{' '}
                <a href="https://developer.apple.com/swift" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  <span className='wordSize'>Swift</span>
                </a>{' '}
                programming language for iOS!
              </p>
              <p>
                Fast-forward to today, I’m now a Full-Stack Web Developer. My main focus these days is creating accessible,
                inclusive products and digital experiences. I love what I do and I do love collaborating in diverse environments and
                creative teams.
              </p>
              <p>Here are a few technologies I’ve been working with recently:</p>
              <div className='about-text-grid'>
                <ul className='mobileView' style={ulStyle}>
                  <li className="triangle-li">
                    <span>JavaScript (ES6+)</span>
                  </li>
                  <li className="triangle-li">
                    <span>React</span>
                  </li>
                  <li className="triangle-li">
                    <span>Node.js</span>
                  </li>
                  <li className="triangle-li">
                    <span>MongoDB</span>
                  </li>
                  <li className="triangle-li">
                    <span>HTML</span>
                  </li>
                  <li className="triangle-li">
                    <span>CSS</span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="image-wrapper">
              <img src={MePhoto} alt="About Me" style={imageStyle} className="hover-effect" />
            </div>
          </Col>
        </Row>
      </Container>
      <style>
        {`
          @media (min-width: 768px) {
            .about-text {
              padding-left: 100px;
            }
          }

          @media (max-width: 767px) {
            .about-text {
              padding: 0px 25px;
              
            }
          }
          @media (max-width: 767px) {
            .about-text-grid {
              padding-left: 30px;
            }

            .about-text-grid ul {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 5px;
              fontSize: 32px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;













