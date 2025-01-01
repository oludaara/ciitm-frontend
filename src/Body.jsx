import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setLandingPage } from './store/uiSlice';
import axios from 'axios';

const Body = () => {
  let dispatch = useDispatch();
  let landingPage = useSelector(state => state.ui.landingPage);
  console.log('redux data', landingPage);

  const fetchData = async () => {
    try {
      if (!landingPage) {
        const response = await axios.get('/api/frontend');
        let data = response.data.data[0];
        dispatch(setLandingPage(data.landingPage));
      } else {
        dispatch(setLandingPage(landingPage));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
