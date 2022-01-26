import React, { useEffect, useState } from "react";
import './Banner.css'
import axios from '../axios'
import {API_KEY, imageUrl} from '../../Constants/constants'

function Banner(){

    const [movie,setMovie]=useState()
    let random = Math.floor(Math.random() * 20);
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            
            setMovie(response.data.results[random])

        
            
            
        })
    },[])
    return(
            <div className="banner" style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}>
                <div className="content">
                    
                    <h1 className="title">{movie ? movie.title : ""} </h1>
                    <div className="banner_buttons">
                        <button className="button">Play</button>
                        <button className="button">My List</button>
                    </div>
                    <h1 className="description">{ movie ? movie.overview : ""}</h1>
                </div>
                <div className="fade_bottom">

                </div>
            </div>
    )
}
export default Banner