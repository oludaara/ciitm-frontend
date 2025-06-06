import { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenu, IoClose, IoChevronDown } from 'react-icons/io5';
import gsap from 'gsap';
import logo from '../../../../assets/images/ciitmLogo.png';

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const toggleDropdown = useCallback(() => {
      setIsDropdownOpen(prev => !prev);
   }, []);

   const handleResize = useCallback(() => {
      if (window.innerWidth > 799) {
         setIsMenuOpen(false);
      }
   }, []);

   useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, [handleResize]);

   useEffect(() => {
      gsap.to('.mobile-menu', {
         y: isMenuOpen ? '0%' : '-100%',
         duration: 0.5,
      });
   }, [isMenuOpen]);

   useEffect(() => {
      const handleClickOutside = event => {
         if (!event.target.closest('.dropdown-container')) {
            setIsDropdownOpen(false);
         }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () =>
         document.removeEventListener(
            'mousedown',
            handleClickOutside,
         );
   }, []);

   const navLinks = [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About Us' },
      { to: '/gallery', label: 'Gallery' },
      { to: '/students', label: 'Students', dropdown: true },
      { to: '/contact', label: 'Contact Us' },
   ];

   return (
      <>
         <div className='mobile-menu fixed top-0 left-0 z-50 w-full h-screen bg-[#333] text-white flex items-center justify-center flex-col gap-10 translate-y-[-100%] md:hidden'>
            {navLinks.map(link =>
               !link.dropdown ? (
                  <NavLink
                     key={link.to}
                     to={link.to}
                     onClick={() => setIsMenuOpen(false)}
                  >
                     {link.label}
                  </NavLink>
               ) : (
                  <div
                     key={link.to}
                     className='relative dropdown-container'
                  >
                     <button
                        className='flex items-center gap-1'
                        onClick={toggleDropdown}
                     >
                        {link.label}
                        <IoChevronDown
                           size={16}
                           className={
                              isDropdownOpen ? 'rotate-180' : ''
                           }
                        />
                     </button>
                     {isDropdownOpen && (
                        <div className='absolute bg-white text-black shadow rounded w-40'>
                           <NavLink
                              to='/admission'
                              onClick={() => setIsMenuOpen(false)}
                              className='block px-4 py-2'
                           >
                              Admission
                           </NavLink>
                           <NavLink
                              to='/status'
                              onClick={() => setIsMenuOpen(false)}
                              className='block px-4 py-2'
                           >
                              Check Status
                           </NavLink>
                           <NavLink
                              to='/payment'
                              onClick={() => setIsMenuOpen(false)}
                              className='block px-4 py-2'
                           >
                              Payment
                           </NavLink>
                        </div>
                     )}
                  </div>
               ),
            )}
         </div>

         <nav className='fixed top-0 left-0 w-full px-10 py-3 bg-white flex justify-between items-center z-50'>
            <NavLink to='/'>
               <img src={logo} alt='Logo' />
            </NavLink>

            <div className='hidden md:flex gap-6'>
               {navLinks.map(link =>
                  !link.dropdown ? (
                     <NavLink key={link.to} to={link.to}>
                        {link.label}
                     </NavLink>
                  ) : (
                     <div
                        key={link.to}
                        className='relative dropdown-container'
                     >
                        <button
                           className='flex items-center gap-1'
                           onClick={toggleDropdown}
                        >
                           {link.label}
                           <IoChevronDown
                              size={16}
                              className={
                                 isDropdownOpen ? 'rotate-180' : ''
                              }
                           />
                        </button>
                        {isDropdownOpen && (
                           <div className='absolute bg-white text-black shadow rounded w-40'>
                              <NavLink
                                 to='/admission'
                                 className='block px-4 py-2'
                              >
                                 Admission
                              </NavLink>
                              <NavLink
                                 to='/status'
                                 className='block px-4 py-2'
                              >
                                 Check Status
                              </NavLink>
                              <NavLink
                                 to='/payment'
                                 className='block px-4 py-2'
                              >
                                 Payment
                              </NavLink>
                           </div>
                        )}
                     </div>
                  ),
               )}
            </div>

            <div className='hidden md:flex gap-3'>
               <NavLink
                  to='/login'
                  className='px-8 py-2 bg-[#333] text-white rounded'
               >
                  Login
               </NavLink>
               <NavLink
                  to='/signup'
                  className='px-8 py-2 border rounded'
               >
                  Registration
               </NavLink>
            </div>

            <button
               className='md:hidden'
               onClick={() => setIsMenuOpen(prev => !prev)}
            >
               {isMenuOpen ? (
                  <IoClose size={25} />
               ) : (
                  <IoMenu size={25} />
               )}
            </button>
         </nav>
      </>
   );
};

export default Navbar;
