import { Container, Button } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import RightSidebar from './RightSidebar';
import LeftSidebar from './LeftSidebar';

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 991 });

  const homeStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    paddingTop: '100px',
  };

  const headingStyle = {
    fontSize: isMobile ? '4vw' : '1.2vw', // Updated font size
    fontWeight: '600',
    marginBottom: '1.5rem',
    color: '#f57dff',
    fontFamily: 'SF Mono,Fira Code,Fira Mono,Roboto Mono, monospace',
  };

  const subheadingStyle = {
    fontSize: isMobile ? '6vw' : '5vw',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '800',
    color: '#ccd6f6',   
  };

  const paragrafhStyle = {
    fontSize: '1.2vw',
    marginBottom: '3rem',
    fontFamily: 'Inter, sans-serif',
    color: '#8892b0',
    marginTop: '1rem',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
    maxWidth: '100%',
  };

  const buttonStyle = {
    fontSize: isMobile ? '3.5vw':'1.2vw',
    background: 'linear-gradient(107.21deg, #f57dff  24.43%, #2954A3 68.95%)',
    borderRadius: '30px',
    width: '200px',
    fontFamily: 'SF Mono,Fira Code,Fira Mono,Roboto Mono, monospace',
    padding: '10px',
    gap: '10px',
    height: '50px',
    border: 'border: 1.53px solid',
    borderImageSource: 'linear-gradient(94.92deg, rgba(255, 255, 255, 0.6) 4.31%, #000000 88.77%)',
  };

  const buttonStyle2 = {
    fontSize: isMobile ? '3.5vw':'1.2vw',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, #000000 100%)',
    backgroundBlendMode: 'overlay',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '30px',
    width: '200px',
    padding: '10px',
    gap: '10px',
    height: '50px',
    border: 'border: 1.53px solid',
    borderImageSource: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, #000000 100%)',
  };



  return (
    <Container fluid style={homeStyle} id="home">
     {/* Left Sidebar */}
     {!isMobile && <LeftSidebar />}
      <h1 style={headingStyle}>Hi, my name is</h1>
      <h2 style={subheadingStyle}>Marisha Deroubaix.</h2>
      <h2 style={subheadingStyle}><span className='colorSlate'>A Fullstack Web Developer.</span></h2>
      {!isMobile && (
        <p  style={paragrafhStyle}>
          I&apos;m a web developer specializing in building  (and occasionally designing) <br/> exceptional websites. Currently,
          I&apos;m focused on building all sorts of accessible, <br/> websites.
        </p>
      )}
       {/* Right Sidebar */}
      {!isMobile && <RightSidebar />}

      {isMobile && (
        <p className="about-text-home" style={{ ...paragrafhStyle, fontSize: '4vw' }}>
          I&apos;m a web developer specializing in building (and occasionally designing) exceptional websites.
          Currently, I&apos;m focused on building accessible, human-centered websites.
        </p>
      )}
      <div style={buttonContainerStyle}>
        <Button variant="primary" size="lg" style={buttonStyle2}>
          Let&apos;s talk
        </Button>
        <Button variant="primary" size="lg" style={buttonStyle}>
          Download CV
        </Button>
      </div>
    </Container>
  );
};

export default Home;






