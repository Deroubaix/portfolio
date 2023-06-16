const Footer = () => {
  const footerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    padding: '20px',
    textAlign: 'center',
    fontSize: '5px',
    color: '#aeb4b9',
    marginTop: 'auto',
  };

  const linkStyle = {
    color: '#aeb4b9',
    textDecoration: 'none',
    transition: 'color 0.3s',
  };

  return (
    <footer className="footer-style" style={footerStyle}>
      <a
        className="footer-style" 
        href="https://github.com/Deroubaix/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseOver={(e) => e.target.style.color = '#f57dff'}
        onMouseOut={(e) => e.target.style.color = '#aeb4b9'}
      >
        &copy; {new Date().getFullYear()}. Made by Marisha Deroubaix
      </a>
    </footer>
  );
};

export default Footer;

