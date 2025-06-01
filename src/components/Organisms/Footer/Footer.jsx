import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/ciitmLogo.png';
import useSocialLinks from '../../../hooks/useSocialLinks';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const SocialLink = React.memo(
   ({ href = '', label, isEmail = false }) => {
      if (!href) return null;

      return (
         <a
            href={isEmail ? `mailto:${href}` : href}
            target='_blank'
            rel='noopener noreferrer'
         >
            {label}
         </a>
      );
   },
);

SocialLink.propTypes = {
   href: PropTypes.string,
   label: PropTypes.string.isRequired,
   isEmail: PropTypes.bool,
};

const Footer = React.memo(() => {
   useSocialLinks();
   const socialLinks = useSelector(state => state.socialLink.links);

   return (
      <footer className='w-full flex items-center justify-between px-4 md:p-10 max-[999px]:flex-col'>
         <div className='left w-[50%] max-[599px]:pb-10 max-[999px]:w-full flex items-start max-[999px]:items-center justify-center flex-col gap-4'>
            <Link to='/'>
               <img src={logo} alt='Logo' />
            </Link>
            <p className='w-[47%] text-sm lg:text-base max-[599px]:hidden text-[#333] max-[999px]:text-center max-[999px]:pb-6'>
               See why students love learning with us and how
               we&apos;ve made a difference in their journeys.
            </p>
         </div>

         <div className='right w-[50%] max-[999px]:w-full flex items-start justify-center gap-10 flex-wrap'>
            <div className='flex max-[599px]:w-[25%] items-start justify-evenly flex-col gap-4 mb-4 mx-8'>
               <p className='text-base text-[#333] font-bold'>
                  Navigation
               </p>
               <Link to='/'>Home</Link>
               <Link to='/about'>About Us</Link>
               <Link to='/gallery'>Gallery</Link>
               <Link to='/students'>Student</Link>
               <Link to='/contact'>Contact Us</Link>
            </div>

            <div className='flex max-[599px]:w-[45%] mx-0 items-start justify-between flex-col gap-4 text-center mb-4'>
               <p className='text-base text-[#333] font-bold'>
                  Important Links
               </p>
               <Link to='/privacy'>Privacy Policy</Link>
               <Link to='/terms'>Terms of Services</Link>
               <Link to='/contact'>Contact Us</Link>
               <Link to='/blog'>Blog</Link>
               <Link to='/support'>Support</Link>
            </div>

            <div className='flex max-[599px]:w-full items-start max-[599px]:items-center justify-between flex-col gap-4 mb-4 mx-8'>
               <p className='text-base text-[#333] font-bold'>
                  Social Media
               </p>
               <div className='links flex flex-col  max-[599px]:flex-row gap-4 flex-wrap items-start justify-center text-center'>
                  <SocialLink
                     href={socialLinks?.instagram}
                     label='Instagram'
                  />
                  <SocialLink
                     href={socialLinks?.facebook}
                     label='Facebook'
                  />
                  <SocialLink
                     href={socialLinks?.twitter}
                     label='Twitter'
                  />
                  <SocialLink
                     href={socialLinks?.youtube}
                     label='Youtube'
                  />
                  <SocialLink
                     href={socialLinks?.linkedin}
                     label='LinkedIn'
                  />
                  <SocialLink
                     href={socialLinks?.email}
                     label='Email'
                     isEmail
                  />
               </div>
            </div>
         </div>
      </footer>
   );
});

export default Footer;
