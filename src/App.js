import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Aboutus from './sections/Aboutus/Aboutus';
import Hero from './sections/Hero/Hero';

function App() {
  return (
        <div className="app">
                <Navbar/>   
                <Hero/>  
                <Aboutus/>               
        </div>
  );
}

export default App;
