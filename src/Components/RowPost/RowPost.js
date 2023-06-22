import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,apiKey} from '../../Constants/Constants'
import Youtube from 'react-youtube'
function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlid]=useState([])
 
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data.results)
      setMovies(response.data.results)
    }).catch(err=>{
     // alert('Network Error');
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
  const HandleMovie=(id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${apiKey}`).then(response=>{
      if(response.data.results.length!==0){
        setUrlid(response.data.results[0])
      }
      else{
        console.log('Trailer is not available');
        alert('Trailer is not available')
      }
    })
  }
  return (
    <div className='row'>
    <h2>{props.title}</h2>
<div className="posters">
{movies.map((obj)=>
<img onClick={()=>HandleMovie(obj.id)} className={props.isSmall ? 'smallPoster' :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
)}
</div>
{ urlId && <Youtube opts={opts} videoId={urlId.key}/>}
</div>
  )
}

export default RowPost