import React from 'react'
import { Helmet } from 'react-helmet-async'
import History from '../components/aboutComponents/History'
import AboutHero from '../components/aboutComponents/AboutHero'
import Teachers from '../components/aboutComponents/Teachers'
import Courses from '../components/aboutComponents/Courses'
import CampusFacilities from '../components/aboutComponents/CampusFacilities'

const About = () => {
  return (
    <>
    <Helmet>
            <title>About - CIITM Dhanbad</title>
            <meta name='description' content='About My Website' />
    </Helmet>
        
    <AboutHero/>
  <History/>
  <Teachers/>
  <Courses/>
  <CampusFacilities/>
    </>
  )
}

export default About
