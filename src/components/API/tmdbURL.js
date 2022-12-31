import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

export const api =  axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    params: {
    api_key:  apiKey,
    }
})
