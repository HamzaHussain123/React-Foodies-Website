import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Delivery from './Components/Delivery';
import About from './Components/About';
import TopCollections from './Components/TopCollections';
import Team from './Components/Team';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


function App() {

  return <>
    <Navbar />
    <Home />
    <Delivery />
    <About />
    <TopCollections />
    <Team />
    <Testimonials />
    <Footer />
  </>

}

export default App
