import React, {useState,useEffect} from 'react'
import Youtube from 'react-youtube'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'
import './RowPost.css'

function RowPost(props) {

  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState("")

  useEffect(() => {
    axios.get(props.url)
    .then((res) => {
      console.log(res.data.results[0])
      
      setMovies(res.data.results)
    }) 
    .catch(err => {
      console.log(err);
    })   
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`)
    .then(res =>{
      if(res.data.results.length !== 0){
        setUrlId(res.data.results[0])
      } else {
        console.log("Trailer Not Available");
      }
    })
    
  }
  

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj) => {
          return(
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          )
        })}        
        
                       
      </div>
      {urlId && <Youtube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost