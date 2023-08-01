import { Toaster } from 'react-hot-toast';

import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Aboutus from './sections/Aboutus/Aboutus';
import Contact from './sections/Contact/Contact';
import Hero from './sections/Hero/Hero';
import Mission from './sections/Mission/Mission';
import Services from './sections/Services/Services';
import Team from './sections/Team/Team';
import Footer from './sections/Footer/Footer';

function App() {
  return (
          <div className="app">
                <Toaster position="top-center" reverseOrder={false} />

                <Navbar/>   
                <Hero/>  
                <Aboutus/>               
                <Mission/>               
                <Services/>          
                <Team/>    
                <Contact/> 
                <Footer/> 
        </div>

  );
}

export default App;
