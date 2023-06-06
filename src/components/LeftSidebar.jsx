import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const LeftSidebar = () => {
  const sidebarStyle = {
    width: '5%',
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "1rem",
    zIndex: 100,
    marginLeft: '1.9rem'
  };

  const lineStyle = {
    width: "2px",
    height: "15%",
    background: 'linear-gradient(107.21deg, #f57dff  24.43%, #2954A3 68.95%)',
    margin: "0 auto",
    marginLeft: '0.9rem'
  };

  const iconStyle = {
    fontSize: "2rem",
    margin: "1rem 0",
    color: "rgba(255, 255, 255, 0.8)",
    cursor: "pointer",
    transition: "color 0.3s ease",
    
  };

 

  return (
    <div style={sidebarStyle}>
      <div>
        <FontAwesomeIcon
          icon={faLinkedin}
          style={iconStyle}
          onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(245, 125, 255)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)")}
        />
      </div>
      <div>
        <FontAwesomeIcon
          icon={faGithub}
          style={iconStyle}
          onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(245, 125, 255)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)")}
        />
      </div>
      <div style={lineStyle}></div>
    </div>
  );
};

export default LeftSidebar;



