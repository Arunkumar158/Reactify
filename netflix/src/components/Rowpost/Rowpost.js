import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import './Rowpost.css'
import{API_KEY,imageUrl} from '../../constants/constants'
import axios from '../axios'
function RowPost(props) {
   
        const [movies, setMovies] = useState([])
        const [id,setId] =useState('')
        useEffect(()=> {
            
     
        axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(response=>{
            console.log(response.data)
            setMovies(response.data.results)
        }).catch(err=>{
            alert('Network Error')
        })
    }, [])
    const opts  = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
      const handleMovie = (id)=>{
        console.log(id)
        axios.get(``)

      } 
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj)=>
                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter' :'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
            )}
            </div>
            <youtube opts={opts} videoId="2g811Eo7K8U"/>
        </div>
    )
}

export default RowPost