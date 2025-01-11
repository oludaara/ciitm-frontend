import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setLandingPage, setAboutPage } from "./store/uiSlice";
import axios from "axios";



const Body = () => {
  let dispatch = useDispatch()
  let landingPage = useSelector(state => state.ui.landingPage)
  let aboutPage = useSelector(state => state.ui.aboutPage)
 

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/frontend");
        let data = response.data.data[0]
        if(!landingPage){
        dispatch(setLandingPage(data.landingPage))
        dispatch(setAboutPage(data.aboutPage))
        }

      } catch (error) {
        console.error(error);
      }
    };
  
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
