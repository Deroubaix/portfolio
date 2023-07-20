import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import MePhoto from '../assets/me.jpg';

function Navigation() {
  const [showNav, setShowNav] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 991 });

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  
  const handleNavLinkClick = (e, target) => {
    e.preventDefault();
    const targetElement = document.querySelector(target);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const offset = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    window.scrollTo({
      top: offset,
      behavior: 'smooth',
    });
    toggleNav();
  };

  return (
    <>
      {isMobile && (
        <Offcanvas show={showNav} onHide={toggleNav} placement="end" style={{ width: '300px' }}>
          <Offcanvas.Header closeButton style={{ backgroundColor: '#0F103F' }}>
            <Navbar bg="#0F103F" variant="dark">
              <Container>
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ms-auto" style={{ color: '#f57dff' }}/>
              </Container>
            </Navbar>
          </Offcanvas.Header>
          <Offcanvas.Body className="p-0" style={{ backgroundColor: '#0F103F' }}>
            <Nav className="flex-column" style={{ textAlign: 'center', paddingTop: '50px', lineHeight: '2rem', display: 'flex' }}>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#about" onClick={(e) => handleNavLinkClick(e, '#about')}>
                    <span className="wordSize" style={{ color: '#f57dff' }}>01. </span>
                    <span className="wordSize">About</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience" onClick={(e) => handleNavLinkClick(e, "#experience")}>
                    <span className="wordSize" style={{ color: '#f57dff' }}>02. </span>
                    <span className="wordSize">Experience</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact" onClick={(e) => handleNavLinkClick(e, '#contact')}>
                    <span className="wordSize" style={{ color: '#f57dff' }}>03. </span>
                    <span className="wordSize">Contact</span>
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
            <>
              <Navbar.Brand style={{ display: 'flex', alignItems: 'center' }}>
                <img src={MePhoto} alt="Marisha Deroubaix photo" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
                
              </Navbar.Brand>
            </>
          ) : (
            <>
              <Navbar.Brand  style={{ display: 'flex', alignItems: 'center', color: 'rgb(204, 214, 246)', fontFamily: "Fira Code" }} className="me-auto">
                <img className="logo" src={MePhoto} alt="Logo" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '20px' }} />
                
              </Navbar.Brand>
            </>
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
                    <a className="nav-link" href="#contact">
                      <span style={{ color: '#f57dff' }}>03. </span>Contact
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




















































