import  { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "../index.css" 

const MovieDetail = () => {
  const { state } = useLocation();
  const { id } = state; 

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://www.omdbapi.com/?i=${id}&apikey=a45cedb`)
            .then(response => response.json())
            .then(value => {
              setMovie(value);
              console.log(value)
            })
        }
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-10 h-auto w-full  flex flex-row gap-10  moviediv'>
      <div className='bg-white  rounded p-2 w-300' >
        <img src={movie.Poster} alt={movie.Title} className='rounded  h-full w-full ' />
      </div>
      <div className='flex flex-col gap-5 text-white'>
          <h1><span className='span'>Tittle:</span> {movie.Title} ({movie.Year})</h1>
          <p><span className='span'>Actors:</span> {movie.Actors}</p>
          <p><span className='span'>Awards:</span> {movie.Awards}</p>
          <p><span className='span'>Country:</span> {movie.Country}</p>
          <p><span className='span'>Genre:</span> {movie.Genre}</p>
          <p><span className='span'>Director:</span> {movie.Director}</p>
          <p><span className='span'>Rating:</span> {movie.imdbRating}</p>
          <p><span className='span'>Released Date:</span> {movie.Released}</p>
          <p><span className='span'>Release Year:</span> {movie.Year}</p>
          <p><span className='span'>Details:</span> {movie.Plot}</p>
      </div>
    </div>
  );
};

export default MovieDetail;

