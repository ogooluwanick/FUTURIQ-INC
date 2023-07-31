import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Aboutus from './sections/Aboutus/Aboutus';
import Hero from './sections/Hero/Hero';
import MissionStatement from './sections/MissionStatement/MissionStatement';

function App() {
  return (
        <div className="app">
                <Navbar/>   
                <Hero/>  
                <Aboutus/>               
                <MissionStatement/>               
        </div>
  );
}

export default App;
