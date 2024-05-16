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

export const searchMovies = async (searchQuery, page) => {
    const response = await instance.get('search/movie',
        {
        params: {
            query: searchQuery,          
            page: page,
                 language: 'en-US',
        }
    }
 )
    return response.data.results;
    
   
}

export const getMovieById = async (movieId) => {
    const response = await instance.get(`movie/${movieId}`,
        {
        params: {
                    
                 language: 'en-US',
        }
    }
 )
    return response.data;  
}

export const getMovieCast = async (movieId) => {
    const response = await instance.get(`movie/${movieId}/credits`,
        {
        params: {
                    
                language: 'en-US',
                
        }
    }
    )
  
    return response.data.cast; 
}

export const getMovieReviews = async (movieId) => {
    const response = await instance.get(`movie/${movieId}/reviews`,
        {
        params: {
                    
                language: 'en-US',
                
        }
    }
    )
  
    return response.data.results; 
    // return console.log(response.data.results)

}