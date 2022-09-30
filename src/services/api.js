import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=9a8aff367d5e460a11fbbcc0aadd6f97&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;