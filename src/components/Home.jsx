import { Container, Button } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import RightSidebar from './RightSidebar';
import LeftSidebar from './LeftSidebar';

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 991 });

  const homeStyle = {
    minHeight: isMobile ? '80vh' : '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    marginTop: '100px',
    flex: '1', 
  };

  const headingStyle = {
    fontSize: isMobile ? '5vw' : '1.2vw', 
    fontWeight: '600',
    marginBottom: '1.5rem',
    color: '#f57dff',
    fontFamily: 'SF Mono,Fira Code,Fira Mono,Roboto Mono, monospace',
   
  };

  const subheadingStyle = {
    fontSize: isMobile ? '8vw' : '5vw',
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
    gap: '2rem',
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

  const handleLetsTalkClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCVClick = () => {
    
    const resumePath = '/portfolio_marisha.pdf';
    window.open(resumePath, '_blank');
  };


  return (
    <Container fluid style={homeStyle} id="home">
      {/* Left Sidebar */}
      {!isMobile && <LeftSidebar />}
      <h1 style={headingStyle}>Hi, my name is</h1>
      <h2 style={subheadingStyle}>Marisha Deroubaix.</h2>
      <h2 style={subheadingStyle}><span className='colorSlate'>I&apos;m a full stack web developer.</span></h2>
      {!isMobile && (
        <p  style={paragrafhStyle}>
          I specialize in building (and occasionally designing)  exceptional websites. <br/>Currently,
          I&apos;m focused on building all sorts of accessible, user friendly websites <br/>that lead to the overall success of your project.
        </p>
      )}
      {/* Right Sidebar */}
      {!isMobile && <RightSidebar />}

      {isMobile && (
        <p className="about-text-home" style={{ ...paragrafhStyle, fontSize: '4vw' }}>
        I specialize in building (and occasionally designing)  exceptional websites.
          Currently, I&apos;m focused on building all sorts of accessible, user friendly websites that lead to the overall success of your project.
        </p>
      )}
      <div style={buttonContainerStyle}>
        <Button variant="primary" size="lg" style={buttonStyle2} onClick={handleLetsTalkClick}>
          Let&apos;s talk
        </Button>
        <Button variant="primary" size="lg" style={buttonStyle} onClick={handleDownloadCVClick}>
          Resume
        </Button>
      </div>
    </Container>
  );
};

export default Home;








