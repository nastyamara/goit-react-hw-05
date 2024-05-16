
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom";

import { searchMovies } from "../../fetchMovies";
import MovieList from "../../components/MovieList/MovieList";
import MoviesSearchForm from "../../components/MoviesSearchForm/MoviesSearcForm";






export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  // const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('query') ?? ''




     const handleSearch = (newQuery) => {
       setMovies([]);
     
    setSearchParams({ query: newQuery});
  
}
  
  


  useEffect(() => {
     
    if (query === '') {
      return
    }
        async function getMovies() {
          try {
            setError(false);
       
            const data = await searchMovies(query);
            setMovies(data);
           
     
        
                  }
          catch(error) {
             setError(true);
          }
              
}
       
    
   getMovies()  

    }, [query])
           
  

     return (
      <header>
        <MoviesSearchForm handleSearch={handleSearch}/>
 
      {movies.length > 0 &&    <MovieList movies={movies} />}



</header>
    )
}