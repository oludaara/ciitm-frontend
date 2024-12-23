import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setLandingPage } from "./store/uiSlice";
import axios from "axios";


const Body = () => {
  let dispatch = useDispatch()
  let landingPage = useSelector(state => state.ui.landingPage)
  console.log('redux data',landingPage)
 

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/frontend");
        let data = response.data.data[0]
        console.log(data.landingPage);
        if(!landingPage){
        dispatch(setLandingPage(data.landingPage))
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
