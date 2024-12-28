import axios from "axios";


export const get_Album = async() => {
try {
    let res = await axios.get("/api/albums");
    return res.data;
} catch (error) {
    return Error(error);
}
}