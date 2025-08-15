
import './App.css';
import About from './component/About';
import AboutBottom from './component/AboutBottom';
import Card from './component/Card';
import Hero from './component/Hero';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Card/>
     <About/>
     <AboutBottom/>
    </div>
  );
}

export default App;
