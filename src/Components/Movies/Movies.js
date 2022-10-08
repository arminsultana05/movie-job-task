import React, { useContext, useEffect, useState } from 'react';
import { api } from '../../App';
import Movie from './Movie';

const Movies = () => {
    const [movie, setMovie] = useState([])
    const [search, setSearch] = useState([])
    const dataObject = useContext(api)
    const { searcValue, date } = dataObject;
    useEffect(() => {
        fetch("https://movie-task.vercel.app/api/popular?page=1")
            .then(res => res.json())
            .then(data => setMovie(data))
    })

    const arr = movie?.data?.results?.filter((item) => {
        let popular = 0;
        // console.log(item);

        if (item.popularity > popular) {
            popular = item.popularity
            return popular

        }

    })
    useEffect(() => {

        fetch(` https://movie-task.vercel.app/api/search?page=1&query=${searcValue}`)
            .then(res => res.json())
            .then(data => setSearch(data?.data?.results))

    }, [searcValue])

    const filterMovie = movie?.data?.results?.filter((item) => {
        if (item.release_date === date) {
            return item;

        }


    })
    console.log(filterMovie);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-28 mid-container'>
            {
                 filterMovie?.length > 0 &&
                 (filterMovie?.map((m) => <Movie
                     key={m.id}
                     m={m}></Movie>)) 


            }


            {
               


                    searcValue !== "" ?
                        (
                            search?.map((m) => <Movie
                                key={m.id}
                                m={m}></Movie>)
                        ) :
                        (
                            arr?.map((m) => <Movie
                                key={m.id}
                                m={m}></Movie>)
                        )

            }
            {
                arr?.map((m) => <Movie
                    key={m.id}
                    m={m}></Movie>)
            }

        </div>
    );
};

export default Movies;