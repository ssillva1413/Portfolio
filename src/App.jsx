import styles from './App.module.css';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import Certificates from './components/Certificates/Certificates.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';
import ScrollRevealObserver from './components/ScrollRevealObserver/ScrollRevealObserver.jsx';
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <ScrollRevealObserver />
       <WhatsappButton />
    </div>
  );
}
