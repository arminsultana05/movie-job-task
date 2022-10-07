import React, { useEffect, useState } from 'react';

const Header = () => {
    const [movie, setMovie]= useState()
    useEffect=()=>{
        fetch('https://movie-task.vercel.app/api/popular?page=1')
        .then(res=> res.json())
        .then(data=> console.log(data))
    }
    return (
        <div>
            <h1>This is header</h1>
            
        </div>
    );
};

export default Header;