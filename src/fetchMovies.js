import axios from "axios";



const instance = axios.create({
  baseURL:  'https://api.themoviedb.org/3',

     headers: {
       
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzI4NDdhYTA1ZWU1OWNhYTIyMWEzM2VlOGJkNzg3OSIsInN1YiI6IjY2MmY5NmE4YTgwNjczMDEyOGU5NmE3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gAA3JHO8-XL5wYsGcYA0h16bIPSpHcDD-5sXVGBOKRQ',
    }
});




export const getTrendingMovies = async () => {
    const response = await instance.get('trending/movie/day', [     {
        options: {
            language: 'en-US',
        }
        }]
        
   
    )
    return response.data.results;
}

// export const searchMovies = async () => {
//     const response = await axios.get('/3/search', options)
//     return response.data
// }