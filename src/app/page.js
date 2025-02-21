
import './globals.css';
import Nav from './navbar';
import Home from './Home';
import Card from './card';
import About from './Aboutus';
import Services from './services';
import Carousel from './carousel';
import Social from './social';
import Footer from './footer';


export default function App() {
  return (
    <>
    <div className="App">
      <Nav/>
      <Home/>
      <Card/>
      <About/>
      <Services/>
      <Carousel/>
      <Social/>
      <Footer/>
     
    </div>
    
    </>
  );
}


