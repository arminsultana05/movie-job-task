import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../App';
import "./Movie.css"

const Movie = ({ m }) => {
    
   
    const {id, original_title, overview, popularity, poster_path, release_date
        , title, vote_average, vote_count
    } = m;
    const navigate = useNavigate();
    const img = `https://image.tmdb.org/t/p/original/${poster_path}`

    const navigateToMoviesDetails=(id)=>{
        navigate(`/movie-details/${id}`)


    }
    
    // console.log(search);
    // const searchMovie = useMemo(async()=>{
    //    const url= fetch(` https://movie-task.vercel.app/api/search?page=1&query=${dataObject.searcValue}`)
    //    const result = await url
    //    return result;
        
    // },[dataObject.searcValue])
    // console.log(searchMovie);

    return (
        <div onClick={()=>navigateToMoviesDetails(id)} className="container">
             <div class="box">
            <div class="imgBox">
                <img src={img}alt=""/>
            </div>
            <div class="content text-left">
                <p className='text-white font-Bebas Neue text-xl'>
                Title: {title}
                    </p>
                   
                <p className='text-white font-Bebas Neue text-xl'>
                 Popularity: {popularity}
                    </p>
                <p className='text-white font-Bebas Neue text-xl'>
                 Release Date: {release_date}
                    </p>
               
            </div>
            
        </div>
        </div>
        
         
       
        // <div class="card w-96 bg-base-100 shadow-xl">
        //     <figure class="px-10 pt-10">
        //         `<img src={img} alt="Shoes" class="rounded-xl" />`

        //     </figure>
        //     <div class="card-body items-center text-center">
        //         <h2 class="card-title">{title}</h2>
        //         <h2 class="card-title">{popularity}</h2>
        //         <h2 class="card-title">{release_date}</h2>
        //         <p>If a dog chews shoes whose shoes does he choose?</p>
        //         <div class="card-actions">
        //             <button class="btn btn-primary">Buy Now</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Movie;