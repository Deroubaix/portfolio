
import CirclePointer from './components/CirclePointer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
/* import Work from './components/Work'; */
import './App.css';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const appStyle = {
    backgroundColor: '#0F103F',
  };

  return (
    <BrowserRouter>
      <div className="App" style={appStyle}>
        <CirclePointer />
        <Navbar />
        <Home />
        <About />
        <Experience />
        {/* <Work /> */}
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;







