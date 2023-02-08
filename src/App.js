import { Route, Routes } from "react-router-dom";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import Category from "./components/Catergory";
import TheaterList from "./components/TheaterList";
import AddTheater from "./components/AddTheater";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";
import Menu from "./components/Menu"
import Navbar from "./Navbar"; 

function App() {
  return(
    <>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Menu/>}/>
        <Route path="/movies" element={<MovieList/>}/>
        <Route path="/addMovie" element={<AddMovie/>}/>
        <Route path="/movie/edit/:id" element={<AddMovie/>}/>
        <Route path="/theaters" element={<TheaterList/>}/>          
        <Route path="/addTheater" element={<AddTheater/>}/>
        <Route path="/theater/edit/:id" element={<AddTheater/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
    </> 
  )
}

export default App