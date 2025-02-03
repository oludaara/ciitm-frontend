import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import gsap from 'gsap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/ciitmLogo.png';
import { useRef } from 'react';

const Navbar = () => {
   let menu = useRef(null);
   let open = useRef(null);
   let close = useRef(null);

  const openMenu = () => {
    gsap.to(menu.current, {
      y: '0%',
      duration: 0.5,
    });
    open.current.style.display = 'none';
    close.current.style.display =
      'block';
  };

  const closeMenu = () => {
    gsap.to(menu.current, {
      y: '-100%',
      duration: 0.5,
    });
    open.current.style.display =
      'block';
    close.current.style.display =
      'none';
  };

  return (
    <>
      <div
        ref={menu}
        className='mobile-menu w-full h-screen bg-[#333] text-[6vw] font-semibold text-white hidden max-[599px]:block -translate-y-[100%] fixed top-0 left-0 z-[99]'
      >
        <nav className='w-full h-full flex items-center justify-center gap-6 flex-col'>
          <NavLink
            to='/'
            className={({
              isActive,
            }) =>
              isActive
                ? 'font-semibold transition-all'
                : 'hover:font-normal transition-all'
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to='/about'
            className={({
              isActive,
            }) =>
              isActive
                ? 'font-semibold transition-all'
                : 'hover:font-normal transition-all'
            }
            onClick={closeMenu}
          >
            About US
          </NavLink>
          <NavLink
            to='/gallery'
            className={({
              isActive,
            }) =>
              isActive
                ? 'font-semibold transition-all'
                : 'hover:font-normal transition-all'
            }
            onClick={closeMenu}
          >
            Gallery
          </NavLink>
          <NavLink
            to='/students'
            className={({
              isActive,
            }) =>
              isActive
                ? 'font-semibold transition-all'
                : 'hover:font-normal transition-all'
            }
            onClick={closeMenu}
          >
            Students
          </NavLink>
          <NavLink
            to='/contact'
            className={({
              isActive,
            }) =>
              isActive
                ? 'font-semibold transition-all'
                : 'hover:font-normal transition-all'
            }
            onClick={closeMenu}
          >
            Contact Us
          </NavLink>
          <div className='btns flex items-center justify-between gap-3 text-[5vw]'>
            <NavLink
              to='/login'
              className='px-8 py-2 w-full bg-[#f9f9f9] text-[#333] rounded-lg font-[Poppins]'
              onClick={closeMenu}
            >
              Login
            </NavLink>
            <NavLink
              to='/signup'
              className='px-3 py-2 w-full bg-[#F9F9F9] text-[#333] border-[1px] border-[#D7D7D74D] rounded-lg font-[Poppins]'
              onClick={closeMenu}
            >
              Registration
            </NavLink>
          </div>
        </nav>
      </div>

      <nav className='w-full fixed top-0 left-0 px-10 max-[599px]:px-6 py-3 z-[999] bg-white flex items-center justify-between'>
        <NavLink className='logo'>
          <img src={logo} alt='' />
        </NavLink>
        <div className='links flex items-center justify-between gap-6 text-[1vw] font-light font-[Poppins] max-[599px]:hidden'>
          <NavLink
            to='/'
            className={({
              isActive,
            }) =>
              isActive
                ? 'font-semibold transition-all'
                : 'hover:font-normal transition-all'
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/about'
            className={({
              isActive,
            }) =>
              isActive
                ? 'font-medium transition-all'
                : 'hover:font-normal transition-all'
            }
          >
            About US
          </NavLink>
          <NavLink
            to='/gallery'
            className={({
              isActive,
            }) =>
              isActive
                ? 'font-medium transition-all'
                : 'hover:font-normal transition-all'
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to='/students'
            className={({
              isActive,
            }) =>
              isActive
                ? 'font-medium transition-all'
                : 'hover:font-normal transition-all'
            }
          >
            Students
          </NavLink>
          <NavLink
            to='/contact'
            className={({
              isActive,
            }) =>
              isActive
                ? 'font-medium transition-all'
                : 'hover:font-normal transition-all'
            }
          >
            Contact Us
          </NavLink>
        </div>
        <div className='btns flex items-center justify-between gap-3 max-[599px]:hidden'>
          <NavLink
            to='/login'
            className='px-8 py-2 w-full bg-[#333] text-white rounded-lg text-sm font-[Poppins]'
          >
            Login
          </NavLink>
          <NavLink
            to='/signup'
            className='px-3 py-2 w-full bg-[#F9F9F9] border-[1px] border-[#D7D7D74D] rounded-lg text-sm font-[Poppins]'
          >
            Registration
          </NavLink>
        </div>
        <div
          ref={open}
          className='bg-[#333] rounded-full text-white p-2 hidden max-[599px]:block'
          onClick={openMenu}
        >
          <IoMenu size={25} />
        </div>
        <div
          ref={close}
          className='bg-[#333] rounded-full text-white p-2 hidden'
          onClick={closeMenu}
        >
          <IoClose size={25} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
