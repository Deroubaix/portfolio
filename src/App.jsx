
import CirclePointer from './components/CirclePointer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
/* import Work from './components/Work'; */
import './App.css';
import Contact from './components/Contact';
import Experience from './components/Experience';




function App() {

  const appStyle = {
    backgroundColor: '#0F103F', // Set the desired background color
  };

  return (
    <div className="App" style={appStyle}>
    
    <CirclePointer />
  
      <Navbar />
  
        <Home />
        <About />
        <Experience />
        {/* <Work /> */}
        <Contact />
      
        {/* Add more sections/components here */}
     
    </div>
  );
}

export default App;
