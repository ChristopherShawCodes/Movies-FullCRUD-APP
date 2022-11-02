import React,{useState,useEffect} from 'react'
import axios from 'axios'
//import useParams so we have access to the id 
import {useParams,useNavigate,Link} from 'react-router-dom'

const OneMovie = () => {
    //destruct out of useParams the specific parameter(id)
    const {id} = useParams()
    const navigate = useNavigate()
    const [movie,setMovie] = useState({})



    useEffect(() =>{
        //Server --> Routes --> Get One Movie
        axios.get(`http://localhost:8000/api/movie/${id}`)
        .then((res)=>{
            setMovie(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const handleDelete = (id) =>{
        //Server --> Routes --> Delete Movie
        axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then((res)=>{
            navigate('/movielist')
            console.log(`Deleted ${movie.title} from DB`)
        }).catch((err)=>{
            console.log(`Unable to delete ${movie.title}`)
            console.log(err)
        })
    }


  return (
    <div className='row' id='oneMain'>
    <div class="card" id='oneMovie'>
    <div class="card-header" id='oneNav'>
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link active bg-dark" aria-current="page" href="#">{movie.title}</a>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to={`/edit/${movie._id}`}>Edit Movie</Link>
        </li>
        <li class="nav-item">
                <a><button onClick={(e)=> handleDelete(movie._id)} className='nav-link text-danger'>Delete Movie</button></a>
        </li>
      </ul>
    </div>
    <div class="card-body" id='oneMovieBody'>
                <img className='col-4' src={movie.boxArt} alt='Image link broken or missing entirely' id='oneImage'/>
                <div id='oneMovieText'>
                    <p class="card-text">Genre: {movie.genre}</p>
                    <p class="card-text">Rating: {movie.rating}</p>
                    <p class="card-text">Director: {movie.director}</p>
                    <p class="card-text">Duration: {movie.duration}</p>
                    <p class="card-text">Release Year: {movie.releaseYear}</p>
                </div>
    </div>
  </div>
  </div>   
  )
}

export default OneMovie