import Hero from '../components/homeComponents/Hero';
import Empower from '../components/homeComponents/Empower';
import Skills from '../components/homeComponents/Skills';

import Album from '../components/Album';
import Loader from '../components/Loader';
import Testimonials from '../components/Testimonials';

function Home() {
  return (
    <>
      <Loader />
      <Hero />
      <Empower />
      <Skills />
      <Album />
      <Testimonials />
    </>
  );
}

export default Home;
