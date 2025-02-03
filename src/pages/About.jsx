import React from 'react';
import { Helmet } from 'react-helmet-async';
import History from '../components/aboutComponents/History';
import AboutHero from '../components/aboutComponents/AboutHero';
import Teachers from '../components/aboutComponents/Teachers';
import Courses from '../components/aboutComponents/Courses';
import CampusFacilities from '../components/aboutComponents/CampusFacilities';
import { useSelector } from 'react-redux';
import useAbout from '../hooks/useAbout';
import Loader from '../components/Loader';

const About = () => {
   useAbout();

   let about = useSelector(state => state.about.aboutPage);

   if (!about) {
      return <Loader />;
   }

   return (
      <>
         <Helmet>
            <title>About - CIITM Dhanbad</title>
            <meta name='description' content='About My Website' />
         </Helmet>

         <AboutHero />
         <History />
         <Teachers />
         <Courses />
         <CampusFacilities />
      </>
   );
};

export default About;
