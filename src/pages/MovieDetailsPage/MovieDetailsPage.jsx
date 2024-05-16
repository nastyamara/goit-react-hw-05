import { useEffect, useState, useRef, Suspense } from "react";
import { useParams, NavLink, Outlet, useLocation, Link } from "react-router-dom";
import { getMovieById } from "../../fetchMovies";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
// import MovieCast from "../../components/MovieCast/MovieCast";
// import MovieReviews from "../../components/MovieReviews/MovieReviews";

export default function MovieDetailsPage() {

    const { movieId } = useParams();
    const [error, setError] = useState(false);
    const [movie, setMovie] = useState([]);
    // const [genres, setGenres] = useState([])

    const location = useLocation()
    const backLinkRef = useRef(location.state ?? '/movies')

    
    useEffect(() => {
           
        async function getMovieDetails() {
            try {
                setError(false);
                const data = await getMovieById(movieId);
                setMovie(data);
                // setGenres(data.genres)
                console.log(data)
                // console.log(data.genres)
            }
            catch (error) {
                setError(true);
            }
        }    
            getMovieDetails()
        }
        , [movieId])
           

    return (
        <div>
            <Link to={backLinkRef.current}>Go back</Link>
            <MovieInfo movie={movie}
                // genres={genres}
            >hello</MovieInfo>   
            <ul>
     <li>
<NavLink to='cast'>Cast</NavLink>
                </li>
                <li>
<NavLink to='reviews'>Reviews</NavLink>
                </li>
            </ul>    
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>


</div>
       
)

}