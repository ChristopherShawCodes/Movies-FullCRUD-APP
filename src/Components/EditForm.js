import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom'


const EditForm = () => {
    const [title,setTitle] = useState('')
    const [director,setDirector] = useState('')
    const [rating,setRating] = useState('')
    const [genre,setGenre] = useState('')
    const [releaseYear,setReleaseYear] = useState('')
    const [duration,setDuration] = useState('')
    const [boxArt,setBoxArt] = useState('')
    const [errors, setErrors] =useState({})

    const {id} = useParams()

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/movie/${id}`)
        .then((res) =>{
            setTitle(res.data.title)
            setDirector(res.data.director)
            setRating(res.data.rating)
            setGenre(res.data.genre)
            setReleaseYear(res.data.releaseYear)
            setDuration(res.data.duration)
            setBoxArt(res.data.boxArt)
        }).catch((err)=>{
            console.log(`Unable To Edit ${id}`)
            console.log(err)
        })
    },[])
    

const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault()
    //Server --> Routes --> Update Movie
    axios.put(`http://localhost:8000/api/update/${id}`,{
        title,
        director,
        rating,
        genre,
        releaseYear,
        duration,
        boxArt
    }).then((res) =>{
        console.log(res)
        // navigate('/movielist')
        navigate(`/oneMovie/${id}`)
    }).catch((err)=>{
        setErrors(err.response.data.errors)
        console.log(err)
    })
}

    return (
    <div className='row' id='main'>
    <div className='col-6 mx-auto mt-5'>
        <form className='form-control bg-dark text-light ' onSubmit={handleSubmit} id='formContainer'>
        <h4 id='formHead'>{title}</h4>
            <label className='form-label'>Title:</label>
                <input className='form-control' type='text' onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            <label className='form-label'>Director:</label>
                <input className='form-control' type='text' onChange={(e)=>setDirector(e.target.value)} value={director}></input>
            <label className='form-label'>Rating:</label>
            <select className='form-control' onChange={(e) =>setRating(e.target.value)} value={rating}>
                <option>Select A Rating</option>
                <option value='G'>G</option>
                <option value='PG'>PG</option>
                <option value='PG-13'>PG-13</option>
                <option value='R'>R</option>
                <option value='NC-17'>NC-17</option>
            </select>
            <label className='form-label'>Genre:</label>
            <select className='form-control' onChange={(e) =>setGenre(e.target.value)} value={genre}>
                <option>Select A Genre</option>
                <option value='Comedy'>Comedy</option>
                <option value='Drama'>Drama</option>
                <option value='Horror'>Horror</option>
                <option value='Sci-Fi'>Sci-Fi</option>
                <option value='Fantasy'>Fantasy</option>
                <option value='Action'>Action</option>
                <option value='Family'>Family</option>
                <option value='Animated'>Animated</option>
                <option value='Documentary'>Documentary</option>
                <option value='Thriller'>Thriller</option>
                <option value='Anime'>Anime</option>
            </select>
            <label className='form-label'>Release Year:</label>
                <input className='form-control' type='number' onChange={(e)=>setReleaseYear(e.target.value)} value={releaseYear}></input>
            <label className='form-label'>Duration:</label>
                <input className='form-control' placeholder='0hr 00min' type='text' onChange={(e)=>setDuration(e.target.value)} value={duration}></input>
            <label className='form-label'>Image:</label>
                <input className='form-control' type='text' onChange={(e)=>setBoxArt(e.target.value)} value={boxArt}></input>
            <button className='btn btn-primary mt-3 mb-3' type='submit'>Edit Movie</button>
        </form>
    </div>
    <div className='col-4' id='rightAdd'>
    <ul>
    <li>{errors.title ? <span className='text-danger' id='validationError'>{errors.title.message}</span> : null}</li>
    <li>{errors.director ? <span className='text-danger' id='validationError'>{errors.director.message}</span> : null}</li>
    <li>{errors.rating ? <span className='text-danger' id='validationError'>{errors.rating.message}</span> : null}</li>
    <li>{errors.genre ? <span className='text-danger' id='validationError'>{errors.genre.message}</span> : null}</li>
    <li>{errors.releaseYear ? <span className='text-danger' id='validationError'>{errors.releaseYear.message}</span> : null}</li>
    <li>{errors.duration ? <span className='text-danger' id='validationError'>{errors.duration.message}</span> : null}</li>
    <li>{errors.boxArt ? <span className='text-danger' id='validationError'>{errors.boxArt.message}</span> : null}</li>
    </ul> 
        </div>
        <div className='col-2'>
        <h1 id='addingText'>Editing A Movie.</h1>
        </div>
    </div>
)
}

export default EditForm