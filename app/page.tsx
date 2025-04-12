
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Hero from '@/components/Hero';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Resume />
      <Contact />
    </div>
  );
};

export default Home;
