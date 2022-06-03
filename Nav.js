import { Button } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react'
import "./Nav.css"
import requests from './requests';

function Nav({ setSelectedOption, }) {
    const [active, setActive] = useState("Trending")
    const activeBtn = useRef(null);

    useEffect(() => {
      activeBtn.current.click()
    
    }, [])
    

    const navs = [
        {id:1, name: "Trending", fetchMovies: requests.fetchTrending, refd: activeBtn},
        {id:2, name: "Top Rated", fetchMovies: requests.fetchTopRated},
        {id:3, name: "Action", fetchMovies: requests.fetchActionMovies},
        {id:4, name: "Comedy", fetchMovies: requests.fetchComedyMovies},
        {id:5, name: "Horror", fetchMovies: requests.fetchHorrorMovies},
        {id:6, name: "Romance", fetchMovies: requests.fetchRomanceMovies},
        {id:7, name: "Mystery", fetchMovies: requests.fetchMystery},
        {id:8, name: "Sci-Fi", fetchMovies: requests.fetchSciFi},
        {id:9, name: "Western", fetchMovies: requests.fetchWestern},
        {id:10, name: "Animation", fetchMovies:requests.fetchAnimation},
        {id:11, name: "Tv Movie", fetchMovies: requests.fetchTv},
    ]


  return (
    <div className='nav'>
        {navs.map((nav) =>(
            <Button variant={`${active===nav.id? 'contained' : "outlined"}`} size='small' ref={nav.refd} onClick={() => {setActive(nav.id); setSelectedOption(nav.fetchMovies)}} className={`${active===nav.id? "nav__text--active" : "nav__text"}`} >{nav.name}</Button>
        ))}
    </div>
  )
}

export default Nav