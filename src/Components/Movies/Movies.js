import React, { useContext, useEffect, useState } from 'react';
import { api } from '../../App';
import SearchMovie from '../SearchMovie';
import FilterMovie from './FilterMovie';
import Loading from './Loading/Loading';
import Movie from './Movie';
import './Movies.css'
const Movies = () => {
    const [movie, setMovie] = useState([])
    const [search, setSearch] = useState([])
    const [pageCount, setPageCount] = useState(1)
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(3)
    const [loader, setLoader] = useState(false)
    const dataObject = useContext(api)
    const { searcValue, date } = dataObject;
    useEffect(() => {
        setLoader(true)                                                 
        fetch("https://movie-task.vercel.app/api/popular?page=1")

            .then(res => res.json())

            .then(data => {
                setMovie(data)
                setLoader(false)
            })

    },[])
    useEffect(() => {
        setLoader(true)
        fetch(` https://movie-task.vercel.app/api/popular?page=${pageCount}`)
            .then(res => res.json())
            .then(data => {
                setLoader(false)

                // const count = data?.data?.results?.length
                console.log(data, pageCount);
                // const page = Math.ceil(count / 3)
                // setPageCount(page)
            })
    }, [pageCount])
    // console.log(movie);

    const arr = movie?.data?.results?.filter((item) => {
        let popular = 0;
        // console.log(item);

        if (item.popularity > popular) {
            popular = item.popularity
            return popular

        }

    })

    useEffect(() => {
        setLoader(true)

        fetch(` https://movie-task.vercel.app/api/search?page=1&query=${searcValue}`)
            .then(res => res.json())
            .then(data => {
                setLoader(false)
                setSearch(data?.data?.results)})

    }, [searcValue])

    const filterMovie = movie?.data?.results?.filter((item) => {
        if (item.release_date === date) {
            return item;

        }


    })
    // Pagination Button array..
    const paginationArr = [1, 2, 3, 4, 5]
    // console.log(movie);
    return (
        <>
        {

        
           loader? <Loading></Loading>:
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





                <div className="pagination mid-container w-full flex justify-center">
                    <button onClick={() => setPageCount(pageCount - 1)} disabled={pageCount === 1} >PRE</button>
                    {
                        paginationArr.map(num =>
                            <button className={pageCount === num ? 'selected' : ""} onClick={() => setPageCount(num)}>{num}
                            </button>)
                    }
                    {
                        pageCount > 4 && "..."

                    }
                    {
                        pageCount > 4 && <button className={pageCount > 5 ? "selected" : ""} onClick={() => setPageCount(pageCount + 1)} >{pageCount + 1}</button>
                    }
                    <button onClick={() => setPageCount(pageCount + 1)}
                        aita next button a>NEXT</button>


                </div>

            </>
}
        </>
    );
};

export default Movies;