import React from 'react';

const Movie = ({ m }) => {
    const { original_title, overview, popularity, poster_path, release_date
        , title, vote_average, vote_count
    } = m;
    const img = `https://image.tmdb.org/t/p/original/${poster_path}`
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                `<img src={img} alt="Shoes" class="rounded-xl" />`
                
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{title}</h2>
                <h2 class="card-title">{popularity}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Movie;