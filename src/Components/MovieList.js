import React,{useState,useEffect} from 'react'
import axios from 'axios'
import '../App.css';
import { Link } from 'react-router-dom';




const MovieList = () => {

    const [list, setList] = useState([])

    //when we go to the movie list in the browser it will load this component
    //when the component loads it will run useEffect
    //using axios we will make a request to the server
    //if successful we will add the info to the list
    useEffect(() =>{
        axios.get('http://localhost:8000/api/allMovies')
        .then((res) =>{
        console.log(res)
        setList(res.data)
        }).catch(err => console.log(err))
    },[])



  return (
    <div className='row' id='main'>
        <div className='col-6' id='left'>
        {
            //here movie can be called anything
            //but this is what we are choosing to call each item in the list
            list.map((movie) =>(
                <div className='card bg-dark' id='card'>
                    <h4 className='card-title text-warning' id='card-title'>{movie.title}</h4>
                    <img src={movie.boxArt} className='card-img-top' alt='Image link broken or missing entirely'/>
                    <div id='card-body'>
                    <Link to={`/oneMovie/${movie._id}`} className='badge rounded-pill text-warning' id='link'>More Info</Link>
                    </div>
                    </div>
            ))
        }
        </div>
        <div className='col-6' id='right'> 
        <h1 id='sideText'>All Movies</h1>
        </div>
    </div>
  )
}

export default MovieList