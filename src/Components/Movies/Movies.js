import React, { useEffect, useState } from 'react';
import Movie from './Movie';

const Movies = () => {
    const [movie, setMovie]= useState()
    useEffect(() => {
        fetch("https://movie-task.vercel.app/api/popular?page=1")
            .then(res => res.json())
            .then(data =>setMovie(data))
    })
    
   const arr = movie?.data?.results?.filter((item)=>{
        let popular = 0;
        // console.log(item);
   
        if(item.popularity>popular){
            popular = item.popularity
            return popular

            }

    })
    console.log(arr);
    return (
        <div className='grid grid-cols-3 gap-4 mt-28'>
            {
                arr?.map((m)=> <Movie
                key={m.id}
                m={m}></Movie>)
            }
            
        </div>
    );
};

export default Movies;