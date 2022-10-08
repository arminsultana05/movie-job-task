import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const {detailsId}= useParams();
    const [details, setDetails] =useState({})
    useEffect(()=>{
        const url= ` https://movie-task.vercel.app/api/movie?movieId=${detailsId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=> setDetails(data))

    },[])
    
    // console.log(details?.data);
    return (
        <div>
            <h1>Movies Name:{details?.data?.title} </h1>
            
        </div>
    );
};

export default MovieDetails;