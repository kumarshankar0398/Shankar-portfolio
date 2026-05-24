import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CVDownload from './components/CVDownload';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white font-inter overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <CVDownload />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
