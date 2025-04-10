import React from 'react';
import { Helmet } from 'react-helmet-async';
import History from '../components/Templates/about/History';
import AboutHero from '../components/Templates/about/AboutHero';
import Teachers from '../components/Templates/about/Teachers';
import Courses from '../components/Templates/about/Courses';
import CampusFacilities from '../components/Templates/about/CampusFacilities';
import { useSelector } from 'react-redux';
import useAbout from '../hooks/useAbout';
import Loader from '../components/Molecules/Loader/Loader';

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
