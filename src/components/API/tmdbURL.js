import axios from "axios";

//const apiKey = process.env.API_KEY_REACT;

export const api =  axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    params: {
    api_key:  `0344a75c41d12f762099ba1e7125eae6`,
    }
})

export const getSearchedMovies = async () => {
    const response = await api.get(`/search/movie?`) 
    return response.data
}