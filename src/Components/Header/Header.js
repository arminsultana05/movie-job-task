import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';

const Header = () => {
        const [movie, setMovie]= useState()
        const [query, setQuery] = useState("")
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
        // console.log( arr);
    return (
     <div className="">
           <div class="navbar bg-base-100 w-full">
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl ml-10 text-green-700 text-2xl font-bold">BIP MOVIES</a>
            <a className='text-lg font-bold ml-10' > <Link to='/'>Home</Link></a>
            </div>
            <div class="form-control mr-10 w-1/2 ">
                <div class="input-group">
                    <input  onChange={(e) => setQuery(e.target.value)}  type="text" placeholder="Search Movies…" class="input input-bordered w-full" />
                    
                    <button class="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <div class="flex-none gap-2 mr-10">
                <div class="form-control">
                    <div class="input-group">
                        <select class="select select-bordered">
                            <option disabled selected>Movies Release Date</option>
                            {
                                   arr?.map(r => <option
                                    ion key={r.id}>{r.release_date}</option>)
                                }
                            {/* <option>T-shirts</option>
                            <option>Mugs</option> */}
                        </select>

                    </div>
                </div>
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 ">
                        <li>
                            <a class="justify-between">
                                Profile
                                <span class="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
       
     </div>
    );
};

export default Header;