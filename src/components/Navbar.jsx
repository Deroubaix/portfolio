import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function Navigation() {
  const [showNav, setShowNav] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 991 });

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  
  const handleMobileNavClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    toggleNav(); // Close the mobile navigation after clicking a link
  }; 
  
  return (
    <>
      {isMobile && (
        <Offcanvas show={showNav} onHide={toggleNav} placement="end" style={{ width: '300px' }}>
          <Offcanvas.Header closeButton style={{ backgroundColor: '#0F103F' }}>
            <Navbar bg="#0F103F" variant="dark" >
              <Container >
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ms-auto" style={{ color: '#f57dff' }}/>
              </Container>
            </Navbar>
          </Offcanvas.Header>
          <Offcanvas.Body className="p-0" style={{ backgroundColor: '#0F103F' }}>
            <Nav className="flex-column" style={{ textAlign: 'center', paddingTop: '50px', lineHeight: '2rem', display: 'flex'}} >
              <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" href="#about" onClick={handleMobileNavClick}>
                    <span className='wordSize' style={{ color: '#f57dff' }}>01. </span> <span className='wordSize'>About</span>
                  </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#experience" onClick={handleMobileNavClick}>
                    <span className='wordSize' style={{ color: '#f57dff' }}>02. </span><span className='wordSize'>Experience</span>
                  </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#work" onClick={handleMobileNavClick}>
                    <span className='wordSize' style={{ color: '#f57dff' }}>03. </span><span className='wordSize'>Work</span>
                  </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={handleMobileNavClick}>
                    <span  className='wordSize' style={{ color: '#f57dff' }}>04. </span><span className='wordSize'>Contact</span>
                  </a>
                </li>
              </ul>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      )}
      <Navbar style={{ backgroundColor: 'rgba(20, 37, 84, 0.2)', height: '80px' }} variant="dark" expand="lg">
        <Container>
          {isMobile ? (
            <Navbar.Brand>Portfolio</Navbar.Brand>
          ) : (
            <Navbar.Brand className="me-auto">Portfolio</Navbar.Brand>
          )}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className={isMobile ? 'ms-auto' : ''} onClick={toggleNav} />
          <Navbar.Collapse id="responsive-navbar-nav">
            {!isMobile && (
              <Nav className="ms-auto">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      <span style={{ color: '#f57dff' }}>01. </span>About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#experience">
                      <span style={{ color: '#f57dff' }}>02. </span>Experience
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#work">
                      <span style={{ color: '#f57dff' }}>03. </span>Work
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      <span style={{ color: '#f57dff' }}>04. </span>Contact
                    </a>
                  </li>
                </ul>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;

















































