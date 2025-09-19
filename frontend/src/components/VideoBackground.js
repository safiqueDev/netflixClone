import React from 'react'
import useMovieByid from '../hooks/useMovieByid'
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId, bool}) => {
  const trailerMovie = useSelector(store=>store.movie.trailerMovie);

  useMovieByid(movieId)

  return (
    <div className='w-[vw] overflow-hidden'>
    <iframe
     className={`${bool ? "w-[100%]" : "w-screen aspect-video" } `}
        src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen>
    </iframe>
</div>
)
}

export default VideoBackground
