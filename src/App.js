import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Form from './Components/Form';
import MovieList from './Components/MovieList';
import Navbar from './Components/Navbar';
import OneMovie from './Components/OneMovie';
import EditForm from './Components/EditForm';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/form' element={<Form/>}/>
        <Route path='/movielist' element={<MovieList/>}/>
        <Route path='/oneMovie/:id' element={<OneMovie/>}/>
        <Route path='/edit/:id' element={<EditForm/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
