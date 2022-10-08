import React, { useContext, useEffect, useState } from 'react';
import { api } from '../../App';
import SearchMovie from '../SearchMovie';
import FilterMovie from './FilterMovie';
import Movie from './Movie';

const Movies = () => {
    const [movie, setMovie] = useState([])
    const [search, setSearch] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const dataObject = useContext(api)
    const { searcValue, date } = dataObject;
    useEffect(() => {
        fetch("https://movie-task.vercel.app/api/popular?page=1")
            .then(res => res.json())
            .then(data => setMovie(data))
    })
    useEffect(() => {
        fetch(" https://movie-task.vercel.app/api/popular?page=1")
            .then(res => res.json())
            .then(data => {
                const count = data?.data?.results?.length
                console.log(count);
                const page = Math.ceil(count / 6)
                setPageCount(page)
            })
    })
    console.log(movie);

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
    // console.log(movie);
    return (
       <>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-28 mid-container">
                {
                    filterMovie?.length > 0 &&
                    (filterMovie?.map((m) => <FilterMovie
                        key={m.id}
                        m={m}></FilterMovie>))


                }

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-28 mid-container">
                {

                    searcValue !== "" ?
                        (
                            search?.map((m) => <SearchMovie
                                key={m.id}
                                m={m}></SearchMovie>)
                        ) :
                        (
                            arr?.map((m) => <Movie
                                key={m.id}
                                m={m}></Movie>)
                        )

                }
            </div>



            {/* <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-28 mid-container">  {
                arr?.map((m) => <Movie
                    key={m.id}
                    m={m}></Movie>)
            }</div> */}





            <div className="">
                {
                    [...Array(pageCount).keys()].map(num => <button>{num}</button>)
                }
            </div>

            </>
    );
};

export default Movies;