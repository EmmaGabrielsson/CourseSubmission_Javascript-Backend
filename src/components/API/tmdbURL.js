import axios from "axios";

export default axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    params: {
        api_key: "0344a75c41d12f762099ba1e7125eae6",
    }
})

