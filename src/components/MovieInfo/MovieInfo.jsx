


export default function MovieInfo({ movie }) {
    const genres = movie.genres;
    console.log(genres)
   
    const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'
    return (
        
        <div className='movieInfoContainer'> 
            
            <img src={movie.poster_path ?
                `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
            : defaultImg}
                alt={movie.title} /> 
            <div>
                   <h1>{movie.title}</h1>  
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
                <ul>
                    if (genres !== 0) 
                    { 
                        genres.map((genre) => {
           <li key={genre.id}>{genre.name}</li>
          })}
                
       
        </ul> 
            </div>
         
              
       
        </div>
    )
}

// 