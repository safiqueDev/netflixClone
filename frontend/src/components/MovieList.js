import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, searchMovie=false }) => {
  return (
    <div className="px-8">
      <h1 className={`${searchMovie ? "text-black" : "text-white"} font-serif text-2xl py-3 `}>{title}</h1>
      <div className=" flex overflow-x-auto cursor-pointer">
        <div className="flex items-center">
        {
                       movies?.map((movie) => { 
                            
                            return (
                                <MovieCard key={movie.id}  posterPath={movie.poster_path} />
                            )
                        })
                    }

         
       
        </div>
      </div>
    </div>
  );
};

export default MovieList;
