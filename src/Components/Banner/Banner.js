import React, { useEffect, useState } from "react";
import './Banner.css'
import axios from '../axios'
import {API_KEY} from '../../Constants/constants'

function Banner(){

    const [movie,setMovie]=useState()
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results[0]);
            setMovie(response.data.results[0])
        
            
            
        })
    },[])
    return(
            <div className="banner">
                <div className="content">
                    {console.log(movie)}
                    <h1 className="title"></h1>
                    <div className="banner_buttons">
                        <button className="button">Play</button>
                        <button className="button">My List</button>
                    </div>
                    <h1 className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam rem incidunt at laborum in suscipit!</h1>
                </div>
                <div className="fade_bottom">

                </div>
            </div>
    )
}
export default Banner