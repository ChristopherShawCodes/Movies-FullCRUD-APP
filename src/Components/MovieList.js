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
    <div className='container' id='allContainer'>
        {
            //here movie can be called anything
            //but this is what we are choosing to call each item in the list
            list.map((movie) =>(
                <div className='card'>
                    <p className='text-warning'>--{movie.title}--</p>
                    <img src={movie.boxArt} alt='Image link broken or missing entirely'/>
                    <div className='card-body'>
                    <button className='btn btn-warning'><Link to={`/oneMovie/${movie._id}`} className='btn btn-warning'>Learn More</Link></button>
                    </div>
                    <p className='text-warning'>-----------------------</p>
                </div>
            ))
        }
    </div>
  )
}

export default MovieList