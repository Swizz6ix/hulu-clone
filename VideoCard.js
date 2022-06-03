import React, { forwardRef, useState } from 'react';
import "./VideoCard.css";
import TextTruncate from 'react-text-truncate';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const base_url = "https://image.tmdb.org/t/p/original/";


const VideoCard = forwardRef(({movie}, ref) => {
  const [trailerUrl, setTrailerUrl] = useState('');

  const handleClick = (movie) => {
    if (trailerUrl) {
    setTrailerUrl('')
  } else {
    movieTrailer(movie?.title || "", {id:true})
    // .then((response) => console.log("Baby", response))
    .then((response) => {
      setTrailerUrl(response)
    })
    // .then((url) => {
    //   const urlParams = new URLSearchParams(new URL(url).search);
    //   setTrailerUrl(urlParams.get("v"));
    // })
    .catch((error) => console.log(error));
  }
  console.log("PlayBoi", trailerUrl)
  }

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1
    },
  };
  return (
    <div className='videoCard'>
      <div ref={ref} className='videoCard__box'>
          <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt='movies' onClick={() => handleClick(movie)} />
          <TextTruncate 
          line={1}
          element="p"
          truncateText='...'
          text={movie.overview}
          /> 
          <h2>{movie.title || movie.original_name}</h2>
          <p className='videoCard__stats'>
              {movie.media_type && `${movie.media_type}`}
              {movie.release_date || movie.first_air_date} &bull; {" "}
              <ThumbUpIcon />{" "}
              {movie.vote_count}
          </p>
      </div>
        <div className='videoCard__youtube'>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    </div>
  )
}
)
export default VideoCard