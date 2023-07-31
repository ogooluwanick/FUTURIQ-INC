import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Aboutus from './sections/Aboutus/Aboutus';
import Hero from './sections/Hero/Hero';
import Mission from './sections/Mission/Mission';
import Services from './sections/Services/Services';
import Team from './sections/Team/Team';

function App() {
  return (
        <div className="app">
                <Navbar/>   
                <Hero/>  
                <Aboutus/>               
                <Mission/>               
                <Services/>          
                <Team/>     
        </div>
  );
}

export default App;
