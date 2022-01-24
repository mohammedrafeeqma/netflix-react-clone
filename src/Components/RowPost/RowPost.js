import React ,{useEffect,useState} from "react";
import './RowPost.css'
import axios from "../axios";
import { imageUrl, API_KEY} from '../../Constants/constants'
import YouTube from "react-youtube";

function RowPost(props){
    const [movie, setMovie] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            setMovie(response.data.results)
        })
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      }
      const handleMovie=(id)=>{
            console.log(id);
            axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
                if(response.data.results.length!==0)
                {
                    setUrlId(response.data.results[0])
                }
            })
      }
    return(
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">

                { movie.map((data,index)=>
                    <img onClick={()=>{handleMovie(data.id)}} key={index} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+data.backdrop_path}`} alt="" />
                )}
                
                

            </div>
           { urlId && <YouTube videoId={urlId.key} opts={opts} />}
        </div>

    )
}

export default RowPost