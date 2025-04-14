
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Hero from '@/components/Hero';
import Header from '@/components/Header';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Resume />
      <Contact />
    </div>
  );
};

export default Home;
