import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './components/Home/Home';
import About from './components/About/About'
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import ContactForm from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <NavigationBar/>
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <ContactForm/>
      <Footer/>
   </div>
  );
}

export default App;
