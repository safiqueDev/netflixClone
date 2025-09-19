import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { options, SEARCH_MOVIE_URL } from '../utils/constant';
import { setLoading } from '../redux/userSlice';
import { setSearchMovieDetails } from '../redux/searchSlice';
import axios from 'axios';
import MovieList from './MovieList';

const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector(store => store.app.isLoading);
  const { movieName, searchedMovie } = useSelector(store => store.searchMovie);
  
  const submitHandler = async (e) => {
      e.preventDefault();
      dispatch(setLoading(true));
      try {
          const res = await axios.get(`${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`, options);
          const movies = res?.data?.results;
          dispatch(setSearchMovieDetails({ searchMovie, movies }));
      } catch (error) {
          console.log(error);
      } finally {
          dispatch(setLoading(false));
      }
      setSearchMovie("");
  }

  return (
    <>
    <div className='flex justify-center pt-[10%] w-[100%]'>
        <form onSubmit={submitHandler} className='w-[50%]'>
            <div className='flex justify-between shadow-md border-b-emerald-300 border-2 p-2  rounded-lg w-[100%]'>
                <input value={searchMovie} onChange={(e) => { setSearchMovie(e.target.value) }} className='w-full outline-none rounded-md text-lg' type="text" placeholder='Search Movies...' />
                <button className='bg-emerald-500 text-white rounded-md px-4 py-2'>{isLoading ? "loading..." : "Search"}</button>
            </div>
        </form>

    </div>
    {
        searchedMovie ? ( <MovieList title={movieName} searchMovie={true} movies={searchedMovie}/>) : (<h1>Movie Not Found!!</h1>)
    }
   
</>

)
}

export default SearchMovie
