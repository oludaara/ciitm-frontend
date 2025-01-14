import { useSelector } from 'react-redux';
import Notice_Card from '../Notice_Card';
import React, {
  useEffect,
  useState,
} from 'react';
import Loader from '../Loader';

const Hero = () => {
  let [image, setImage] = useState();
  const [heading, setHeading] =
    useState();
  const [Paragraph, setParagraph] =
    useState();

  let hero = useSelector(
    state => state.home.landingPage,
  );

  useEffect(() => {
    setImage('');
    setHeading('');
    setParagraph(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nemo.',
    );

    if (hero) {
      let data = hero.HeroSection;
      setImage(
        data.homeBackgroundImage,
      );
      setHeading(data.homeTitle);
      setParagraph(data.homeParagraph);
    }
  }, []);

  return !hero ? (
    <Loader />
  ) : (
    <section
      className='w-full min-h-screen flex flex-col lg:flex-row items-center justify-center text-white bg-cover bg-no-repeat px-10 relative'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='text w-full lg:w-1/2 h-full flex items-start justify-center lg:justify-center flex-col gap-3 absolute left-[3vw]'>
        <h3 className=' max-[400px]:text-[8.5vw] text-[6vw] lg:text-[4vw] font-extrabold lg:font-[700] leading-tight w-[25vh] lg:w-fit'>
          {heading}
        </h3>

        <p className='max-[400px]:text-[6vw] text-[5vw] sm:text-2xl w-[70%]'>
          {Paragraph}
        </p>
      </div>
      <div className='card-container absolute bottom-[3vh] right-[2vw] lg:h-full w-full lg:w-1/2 flex items-end justify-end pb-10 flex-col gap-4'>
        <Notice_Card title='Download Free Call' />
        <Notice_Card title='Apply online admission 2025-2026' />
      </div>
    </section>
  );
};

export default Hero;
