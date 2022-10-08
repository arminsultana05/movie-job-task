import React from 'react';
import { useNavigate } from 'react-router-dom';

const FilterMovie = ({ m }) => {

    const { id, original_title, overview, popularity, poster_path, release_date
        , title, vote_average, vote_count
    } = m;
    const navigate = useNavigate();
    const img = `https://image.tmdb.org/t/p/original/${poster_path}`

    const navigateToMoviesDetails = (id) => {
        navigate(`/movie-details/${id}`)


    }
    return (
        <div onClick={() => navigateToMoviesDetails(id)} className="container">
            <div class="box">
                <div class="imgBox">
                    <img src={img} alt="" />
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
    );
};

export default FilterMovie;