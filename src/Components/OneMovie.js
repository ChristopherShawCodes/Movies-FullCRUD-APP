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
        <div className='card' id='oneMovie'>
            <p className='card-title text-warning'>--------{movie.title}--------</p>
            <div className='row'>
                <img className='col-4' src={movie.boxArt} alt='Image link broken or missing entirely' id='oneImage'/>
                <div className='card-body col-4' id='oneInfo'>
                    <p>Director:  <span id='passedInfo'>{movie.director}</span></p>
                    <p>Rating: <span id='passedInfo'>{movie.rating}</span></p>
                    <p>Genre:  <span id='passedInfo'>{movie.genre}</span></p>
                    <p>Duration: <span id='passedInfo'>{movie.duration}</span></p>
                </div>
                <div className='card-body col-2' id='oneButtons'>
                    <button className='btn btn-outline-warning' id='edit'><Link to={`/edit/${movie._id}`} id='editLink'>Edit Movie</Link></button>
                <div className='card-body col-2' id='oneButtons'>
                    <button onClick={(e)=> handleDelete(movie._id)} className='btn btn-outline-danger' id='delete'>Delete Movie</button>
                </div>
                </div>
            </div>
            <p className='text-warning'>-------------------------------------</p>
        </div>
  )
}

export default OneMovie