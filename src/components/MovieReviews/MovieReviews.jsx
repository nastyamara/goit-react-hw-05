import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getMovieReviews } from "../../fetchMovies";



export default function MovieReviews() {

    const { movieId } = useParams();
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        async function getReviews() {
           
            try {
                const data = await getMovieReviews(movieId)
                setReviews(data)
            }
            catch (error) {
                console.log(error)
            }
            
        }
            getReviews()
    }
, [movieId]
    )



    return (
        <ul>{reviews.map(( review ) =>
            <li key={review.id} className="reviewsItem">
                {review.content}
                <span className="author">Author: { review.author}</span>
                </li>)}

        </ul>
        )
}