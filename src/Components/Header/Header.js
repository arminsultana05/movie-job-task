import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';

const Header = () => {
    const [movie, setMovie]= useState()
    useEffect(() => {
        fetch("https://movie-task.vercel.app/api/popular?page=1")
            .then(res => res.json())
            .then(data =>setMovie(data))
    })
    
   const arr=movie?.data?.results?.filter((item)=>{
        let popular = 0;
        // console.log(item);
   
        if(item.popularity>popular){
            popular = item.popularity
            return popular

            }

    })
    console.log( arr);
    return (
        <div>
          
          {/* {
            movie.map((x)=> console.log(x))
          } */}
            
        </div>
    );
};

export default Header;