export default function MovieList({ movies }) {
       <ul>{movies.map((movie) => <li key={movie.id}><p>name:{ movie.original_title}</p></li>)}


            </ul>
}