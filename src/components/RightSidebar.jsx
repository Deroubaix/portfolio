const RightSidebar = () => {
    const sidebarStyle = {
      width: '5%',
      position: 'fixed',
      top: '38%',
      bottom: 0,
      right: 0,
      backgroundColor: 'transparent',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '1.9rem'
    };
  
    const emailStyle = {
      writingMode: 'vertical-lr',
      textDecoration: 'none',
      padding: "1rem",
      letterSpacing: '0.1em',
      color: "rgba(255, 255, 255, 0.8)",
      cursor: "pointer",
      transition: "color 0.3s ease",
    };
  
    const lineStyle = {
      width: '2px',
      height: '25%',
      /* backgroundColor: '#f57dff', */
      background: 'linear-gradient(107.21deg, #f57dff  24.43%, #2954A3 68.95%)',
    };
  
    const handleEmailHover = (e) => {
      e.target.style.color = '#f57dff';
    };
  
    const handleEmailLeave = (e) => {
      e.target.style.color = 'rgba(255, 255, 255, 0.8)';
    };
  
    return (
      <div style={sidebarStyle}>
        <a
          style={emailStyle}
          href="mailto:deroubaix.marisha@gmail.com"
          onMouseEnter={handleEmailHover}
          onMouseLeave={handleEmailLeave}
        >
          deroubaix.marisha@gmail.com
        </a>
        <div style={lineStyle}></div>
      </div>
    );
  };
  
  export default RightSidebar;
  
