import { useState, useEffect } from "react";
import { getTrendingMovies } from '../../fetchMovies';
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
    
    const [hitMovies, setHitMovies] = useState([]);


    useEffect(() => {
        async function getHitMovies() {
            try {
       
        const data = await getTrendingMovies();
                setHitMovies(data)
                console.log(data)
              

    } catch (error) {
      console.log(error)
    }
    // finally {
      
    //          }
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
