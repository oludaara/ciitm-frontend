import axios from "axios";
import { useDispatch } from "react-redux";
import { setTestimonials } from "../store/uiSlice";


export const get_Album = async() => {
    try {
        let res = await axios.get("/api/albums");
        return res.data;
    } catch (error) {
        return Error(error);
    }
}


export const get_Testimonial = async () =>{
    const dispatch =  useDispatch()

    try {
        const response = await axios.get("/api/find/testimonial")
        if (!response.data.Find_Testimonial        ) {
            return Error("Testimonial not found")
        }   
        
        dispatch(setTestimonials(response.data.Find_Testimonial))
        

    } catch (error) {
        console.log(error)
        return Error(error);
    }
}


