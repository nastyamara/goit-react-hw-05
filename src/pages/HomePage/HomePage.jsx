import { useState, useEffect } from "react";
import { getTrendingMovies } from '../../fetchMovies';
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
    
    const [hitMovies, setHitMovies] = useState([]);


    useEffect(() => {
        async function getHitMovies() {
          
       
        const data = await getTrendingMovies();
                setHitMovies(data)
                console.log(data)
              

         }
    
   getHitMovies()

    }, [])
           

    return (
        <div>
            <h1>  HOME PAGE</h1>
                    
          <MovieList movies={hitMovies}/>

    </div>

)




}
