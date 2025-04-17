
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Hero from '@/components/Hero';
import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import Ruler from '@/components/Ruler';
import Diagonal from '@/components/Diagonal';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Diagonal />
      <AboutMe/>
      <Resume />
      <Ruler/>
      <Contact />
    </div>
  );
};

export default Home;
