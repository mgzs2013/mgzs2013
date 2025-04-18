
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Hero from '@/components/Hero';
import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import Ruler from '@/components/Ruler';


const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      
      <AboutMe/>
      <Resume />
      <Ruler/>
      <Contact />
    </div>
  );
};

export default Home;
